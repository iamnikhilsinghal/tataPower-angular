// import { CanActivateFn } from '@angular/router';

// export const AuthGuard: CanActivateFn = (route, state) => {
//   return false;
// };

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isLoggedin = false;
  // isLoggedin= this.auth.service()-----> token valid

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.isLoggedin) {
      return true; // Allow access if the user is authenticated
    } else {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false; // Prevent access to the route
    }
  }
}
