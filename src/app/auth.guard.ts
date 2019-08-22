import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements  CanActivate {

  constructor(private auth: AuthService, private router: Router, private user: UserService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.auth.isLoggedIn) {
        return true;
      }
      return this.user.isLoggedIn().pipe(map(res => {
        if (res.status) {
          this.auth.setLoggedIn(true);
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      }));
    }
}
