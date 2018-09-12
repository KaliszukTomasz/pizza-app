import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private readonly authService: AuthenticationService) {
  }

  canActivate() {
    if (this.authService.getAuthenticatedStatus()) {
      return true;
    } else {
      window.alert('nie masz dostępu!!');
      return false;
    }

  }
}

