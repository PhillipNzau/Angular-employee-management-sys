import {Injectable} from '@angular/core';
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
  // loggedIn = false;
  userData: any;

  constructor(
    public afAuth: AngularFireAuth,
    private afu: AngularFireAuth,
    private router: Router
  ) {
    // this.afu.authState.subscribe((auth => {
    //   this.authState = auth;
    // }));
    // Setting logged in user in localstorage else null
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });

    this.afAuth.authState.subscribe((auth => {
      this.authState = auth;
    }));
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  // tslint:disable-next-line:typedef
  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert('You have been successfully registered!');
        this.router.navigate(['dashboard']);
        console.log(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // tslint:disable-next-line:typedef
  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['dashboard']);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // tslint:disable-next-line:typedef
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

  // tslint:disable-next-line:typedef
  // signup(email: string, password: string) {
  //   this.afu.createUserWithEmailAndPassword(email, password)
  //     .then(user => {
  //       this.authState = user;
  //       this.router.navigate(['/userinfo']);
  //     }).catch(err => {
  //       this.message = ( err.message);
  //       if (password.length < 6) {
  //         this.message = ( err.message);
  //       }
  //   });
  // }
  // tslint:disable-next-line:typedef
  // login(email: string, password: string) {
  //   this.afu.signInWithEmailAndPassword(email, password)
  //     .then(user => {
  //       this.authState = user;
  //       this.loggedIn = true;
  //       this.router.navigate(['dashboard']);
  //       console.log('Nice, it worked!');
  //     })
  //     .catch(err => {
  //       console.log('Something went wrong:', err.message);
  //     });
  // }
}
