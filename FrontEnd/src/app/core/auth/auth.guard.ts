
// Fawez TEKA
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../https/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private localStorageToken: LocalstorageService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = this.localStorageToken.getToken();

      if (token) {
        //fi token nakhdhou just partie thenia haki hachetna bahia haka aaleh aamlna [1]
        const tokenDecode = JSON.parse(atob(token.split('.')[1]));//atob methode to decode token||JSON.perse:JavascriptForm
        if (tokenDecode.isAdmin && !this._tokenExpired(tokenDecode.exp)) return true;
      }

      this.router.navigate(['/admin-login']);
      return false;
    }
    private _tokenExpired(expiration :any): boolean {
      return Math.floor(new Date().getTime() / 1000) >= expiration;
    }



}
