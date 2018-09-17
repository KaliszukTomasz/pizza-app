import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuService} from '../service/menu.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Account} from '../shared/account';
import {AuthenticationService} from '../service/authentication.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private readonly destroy$ = new Subject();
  errorCondition: boolean;
  adminAccount: Account;
  userAccount: Account = {
    login: '',
    password: ''
  };
  loginStatus: boolean;

  constructor(private readonly menuService: MenuService,
              private readonly authService: AuthenticationService,
              private router: Router,
              private location: Location) {
  }

  ngOnInit() {
    this.authService.getAdminAccountFromDataBase().pipe(takeUntil(this.destroy$)).subscribe(acc => this.adminAccount = acc);
    this.loginStatus = this.authService.getAuthenticatedStatus();
  }

  loginUser() {
    if (this.checkIfAccountCorrect()) {
      this.router.navigate(['admin/orders']);
    } else {
      this.userAccount.login = '';
      this.userAccount.password = '';
      this.validationError();
    }
  }

  checkIfAccountCorrect(): boolean {
    if (this.adminAccount.login === this.userAccount.login && this.adminAccount.password === this.userAccount.password) {
      this.authService.setAuthenticatedUser();
      return true;
    } else {
      return false;
    }
  }

  goBack(): void {
    this.location.back();
  }

  isFormValid() {
    return this.userAccount.password.length > 3 && this.userAccount.login.length > 3;
  }

  validationError() {
    this.errorCondition = true;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
