import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: '';
  password: '';
  message: string;
  errorMessage: string; // validation form error handle
  error: {name: string, message: string} = {name: '', message: ''}; // for firebase error handle

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  register() {
    if (this.validateForm (this.email, this.password)) {
      this.authService.registerwithEmail(this.email, this.password)
        // @ts-ignore
        .then(() => {
          this.message = 'You are regestered with data on firebase';
          this.router.navigate(['/userinfo']);
        });

    }
    }
    // alert('register is working');
  //   if (this.validateForm(this.email, this.password)) {
  //     // @ts-ignore
  //     this.authService.registerwithEmail(this.email, this.password)
  //       // @ts-ignore
  //       .then(() => {
  //         this.message = 'You are regestered with data on firebase',
  //         this.router.navigate(['/userinfo']);
  //       // tslint:disable-next-line:variable-name
  //       }).catch(_error => {
  //       this.error = _error;
  //       this.router.navigate(['/register']);
  //     } );
  //   }
  // }

  // tslint:disable-next-line:typedef
  validateForm(email, password) {
    if (email.length === 0) {
      this.errorMessage = 'please enter email';
      return false;
    }
    if (password.length === 0) {
      this.errorMessage = 'please enter password';
      return false;
    }
    if (password.length < 6){
      this.errorMessage = 'password should be at least 6 characters';
      return false;
    }
    this.errorMessage = '';
    return true;
  }

}
