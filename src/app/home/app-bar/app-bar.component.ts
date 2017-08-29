import { Component, OnInit } from '@angular/core';

import { AuthService } from 'app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'df-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {

  public avatarImage = 'https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getAuthState().subscribe(user => {
      if (user) { this.avatarImage = user.photoURL }
    });
  }

  public logout() {
    this.authService.logout();
  }

  public goHome() {
    this.router.navigate(['/home']);
  }

}
