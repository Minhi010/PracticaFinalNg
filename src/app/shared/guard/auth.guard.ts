import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    setTimeout(() => { //timer trick
      if (this.authService.isLogin == false) {
        this.router.navigate(['login']); //home page, usually logged out state
      } else {
        this.router.navigate(['dashboard/client/menu']); //redirect to your after loggedin page
      }
    }, 500) //default 500 works fine, but experiment with 600, 700, 800. lower than 500 was not stable, sometimes kicks you to home page.
    return this.authService.isLogin;
  }


}
