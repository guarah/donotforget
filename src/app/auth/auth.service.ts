import * as firebase from 'firebase/app';

import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private authState: Observable<firebase.User>
  private currentUser: firebase.User = null;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.authState = this.afAuth.authState;
    this.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  }
  getAuthState() {
    return this.authState;
  }

  /**
   * makes the baisc config and login with google provider
   *
   * @memberof AuthService
   */
  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider);
  }


  /**
   * Logut application and redirect to auth
   *
   * @memberof AuthService
   */
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/auth']);
  }

}
