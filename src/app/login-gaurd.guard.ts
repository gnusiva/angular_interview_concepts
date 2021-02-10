import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginGaurdGuard implements CanActivate {

  constructor(public http: HttpClient ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // const promise: Promise<boolean> = new Promise( (resolve, reject) => {
      //   setTimeout(() => {
      //     resolve(true);
      //   }, 5000);
      // });
      // return promise;

      // const promise: Promise<any> =
      //   this.http.get('assets/json/data.json').pipe( map( (data: any) => {
      //     return data.token === 4;
      //   } ) ).toPromise();

      // return promise;

      return localStorage.getItem('token') ? true : false;

  }

}
