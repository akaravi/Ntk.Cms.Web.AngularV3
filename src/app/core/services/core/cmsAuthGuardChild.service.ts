import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { CoreAuthService } from 'ntk-cms-api';

@Injectable()
export class CmsAuthGuardChild implements CanActivateChild {
  constructor(private authService: CoreAuthService,private router: Router) {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('CmsAuthGuardChild run');
    const token = this.authService.getUserToken();
    if (token && token.length > 0) { return true; }
    this.router.navigate(['auth'], { queryParams: { returnUrl: state.url }});

    return false;
  }
}
