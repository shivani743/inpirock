import { Injectable } from '@angular/core';
import {  Router, CanActivate } from '@angular/router';
import { LocalStorageService } from '../storage/local-storage.service';
import { CoreModule } from "../../core.module";
import { localStorageKey } from 'src/app/shared/constants/local-storage-keys';


@Injectable({
  providedIn: CoreModule
})
export class AuthService implements CanActivate {
  
  constructor(
    private readonly localStorage: LocalStorageService,
    public readonly router: Router
  ) { }

  canActivate(): boolean {
    // const token = this.localStorage.get(localStorageKey.loginToken)

    // if (token) {
    //   return true
    // }
    // this.router.navigate(["/login"]);
    return false;
  }


  public getToken() {
    // return this.localStorage.get(localStorageKey.loginToken);
    return "token"
  }

  
}
