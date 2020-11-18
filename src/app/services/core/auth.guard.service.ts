import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { CoreAuthService } from 'ntk-cms-api';

@Injectable()
export class CmsAuthGuard implements CanActivate {
  constructor(private authService: CoreAuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.authService.getUserToken();
    if (token && token.length > 0) { return true; }

    return false;
  }
}
