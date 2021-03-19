import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fieldTextType: boolean;
  email: string;
  password: string;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  // login() {
  //   this.authService.login(this.email, this.password);
  //   this.email = this.password = '';
  //
  // }
  // tslint:disable-next-line:typedef
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
