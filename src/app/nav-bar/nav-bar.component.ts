import {Component, OnInit} from '@angular/core';
import {MenuService} from '../service/menu.service';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  authenticated: boolean = false;

  constructor(readonly menuService: MenuService,
              readonly authService: AuthenticationService) {
  }

  ngOnInit() {
    this.authenticated = this.authService.getAuthenticatedStatus();
  }

  getAuthStatus() {
    return this.authService.getAuthenticatedStatus();
  }

  logout() {
    this.authService.setUnauthenticatedUser();
  }
}
