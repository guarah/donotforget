import { Component, OnInit } from '@angular/core';

import { AuthService } from 'app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public user = null;
  public loading = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getAuthState().subscribe(user => {
      this.loading = false;
      if (user) {
        this.user = user;
        this.router.navigate(['/home']);
      }
    });
  }

  /**
   * Login with google
   *
   * @memberof AuthComponent
   */
  loginWithGoogle() {
    this.loading = true;
    this.authService.loginWithGoogle();
  }

}
