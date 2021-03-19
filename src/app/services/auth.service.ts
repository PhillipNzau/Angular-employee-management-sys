import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: any = null;
  message: string;
  message2: string;
  user: string;
  loggedIn = false;

  constructor(
    private afu: AngularFireAuth,
    private router: Router
  ) {
    this.afu.authState.subscribe((auth => {
      this.authState = auth;
    }));
  }

  // tslint:disable-next-line:typedef
  signup(email: string, password: string) {
    this.afu.createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.authState = user;
        this.router.navigate(['/userinfo']);
      }).catch(err => {
        this.message = ( err.message);
        if (password.length < 6) {
          this.message = ( err.message);
        }
    });
  }
  // tslint:disable-next-line:typedef
  login(email: string, password: string) {
    this.afu.signInWithEmailAndPassword(email, password)
      .then(user => {
        this.authState = user;
        this.loggedIn = true;
        this.router.navigate(['dashboard']);
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }
}
