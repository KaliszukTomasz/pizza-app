import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Account} from '../shared/account';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticated: boolean;

  constructor(readonly httpClient: HttpClient) {
  }

  getAdminAccountFromDataBase(): Observable<Account> {
    return this.httpClient.get<Account>('http://localhost:3000/users/1');
  }

  setAuthenticatedUser() {
    this.authenticated = true;
  }

  setUnauthenticatedUser() {
    this.authenticated = false;
  }

  getAuthenticatedStatus(): boolean {
    return this.authenticated;
  }
}
