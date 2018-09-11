import {Component, OnInit} from '@angular/core';
import {MenuService} from '../service/menu.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  authenticated: boolean = false;

  constructor(readonly menuService: MenuService) {
  }

  ngOnInit() {
    this.authenticated = this.menuService.getAuthenticatedStatus();
  }

  getAuthStatus() {
    return this.menuService.getAuthenticatedStatus();
  }

  logout() {
    this.menuService.setUnauthenticatedUser();
  }
}
