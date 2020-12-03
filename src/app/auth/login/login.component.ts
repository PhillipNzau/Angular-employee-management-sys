import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: '';
  password: '';

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  login() {
    alert('login form working');
  }

}
