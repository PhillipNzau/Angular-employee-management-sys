import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  // signup() {
  //   this.authService.signup(this.email, this.password);
  //   this.email = this.password = '';
  // }

}
