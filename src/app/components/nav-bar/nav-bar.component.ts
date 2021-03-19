import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(
    public authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  logout() {

  }
}
