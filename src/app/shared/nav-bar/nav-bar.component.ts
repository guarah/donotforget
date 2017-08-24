import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'df-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public avatarImage = 'https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAuthState().subscribe(user => {
      if (user) { this.avatarImage = user.photoURL }
    });
  }

}
