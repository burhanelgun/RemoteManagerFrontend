import {Inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { HomeComponent } from '../home/home.component';


@Injectable()
export class AuthService {

  isAuth:boolean=false;

  constructor(
    private router: Router
  ) { 
    console.log("auth service start")

  }


  isLoggedIn(): boolean {
    console.log("this.isAuth:"+this.isAuth);
    if (this.isAuth) {
      console.log("IS LOGGEDIN RETURN TRUE");
      return true;
    } else {
      console.log("IS LOGGEDIN RETURN FALSE")
      return false;
    }
  }

}