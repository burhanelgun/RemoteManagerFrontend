import {Inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';


@Injectable()
export class AuthService {

  isAuth:boolean=false;
  email:string;

  constructor(
    private router: Router
  ) { 

  }


  isLoggedIn(): boolean {
    if (this.isAuth) {
      return true;
    } else {
      return false;
    }
  }

}