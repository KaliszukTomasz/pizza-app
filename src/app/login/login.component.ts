import {Component, OnInit} from '@angular/core';
import {MenuService} from '../shared/menu.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Account} from '../models/account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  adminAccount: Account;
  userAccount: Account = {
    login: '',
    password: ''
  };
  loginStatus: boolean = false;

  constructor(private readonly menuService: MenuService, private router: Router, private location: Location) {
  }

  ngOnInit() {
    this.menuService.getAccountFromDataBase().subscribe(acc => this.adminAccount = acc);
    this.loginStatus = this.menuService.getAuthenticatedStatus();
  }

  checkIfAccountCorrect() {
    if (this.adminAccount.login === this.userAccount.login && this.adminAccount.password === this.userAccount.password) {
      this.menuService.setAuthenticatedUser();
      alert('Zostałeś zalogowany!');
      this.router.navigate(['admin/orders']);

    } else {
      this.userAccount.login = '';
      this.userAccount.password = '';
      alert('Błędne dane logowania!');

    }
  }

  goBack(): void {
    this.location.back();
  }
}
