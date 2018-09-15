import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Account} from '../shared/account';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticated: boolean = false;

  constructor(readonly httpClient: HttpClient) {
  }

  getAccountFromDataBase(): Observable<Account> {
    return this.httpClient.get<Account>('http://localhost:3000/users/1');

  }

  getAccountFromDatabaseByLogin(login: string): Observable<Account> {
    return this.httpClient.get<Account>(`http://localhost:3000/users`, {params: {login: login}});
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
