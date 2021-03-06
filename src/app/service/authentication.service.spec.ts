import {TestBed, inject} from '@angular/core/testing';

import {AuthenticationService} from './authentication.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService, HttpClient, HttpHandler],
      imports: [RouterTestingModule]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it('should set authenticated user', inject([AuthenticationService], (service: AuthenticationService) => {
    // given
    expect(service.getAuthenticatedStatus()).toBe(false);

    // when
    service.setAuthenticatedUser();

    // then
    expect(service.getAuthenticatedStatus()).toBe(true);
  }));

  it('should set unauthenticated user', inject([AuthenticationService], (service: AuthenticationService) => {
    // given
    service.setAuthenticatedUser();
    expect(service.getAuthenticatedStatus()).toBe(true);

    // when
    service.setUnauthenticatedUser();

    // then
    expect(service.getAuthenticatedStatus()).toBe(false);
  }));
});
