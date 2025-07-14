// import { CanActivateFn } from '@angular/router';

// export const AuthGuard: CanActivateFn = (route, state) => {
//   return false;
// };

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanMatch,
  GuardResult,
  MaybeAsync,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthGuard
  implements
    CanActivate,
    CanActivateChild,
    CanDeactivate<CanComponentDeactivate>,
    CanMatch
{
  isLoggedin = false;
  // isLoggedin= this.auth.service()-----> token valid

  constructor(private router: Router) {}

  canMatch(route: Route, segments: UrlSegment[]): boolean {
    console.log('canMatch called');
    return this.isLoggedin;
  }

  canActivate(): boolean {
    console.log('canActivate called');
    if (this.isLoggedin) {
      return true; // Allow access if the user is authenticated
    } else {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false; // Prevent access to the route
    }
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('childRoute', childRoute);

    if (childRoute.routeConfig?.path === 'profile') {
      alert('profile route is not allowed');
      this.router.navigate(['/login']);
      return false;
    }
    return true;

    // if (this.isLoggedin) {
    //   return true; // Allow access if the user is authenticated
    // } else {
    //   this.router.navigate(['/login']); // Redirect to login if not authenticated
    //   return false; // Prevent access to the route
    // }
  }

  // component.canDeactivate() - this will be called if there are certain changes
  canDeactivate(
    component: CanComponentDeactivate
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
