import {Inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { HomeComponent } from '../home/home.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private router: Router,private homeComponent: HomeComponent
  ) { }


  isLoggedIn(): boolean {
    if (this.homeComponent.isAuth) {
    console.log("RETURN TRUE")
      return true;
    } else {
        console.log("RETURN FALSE")

      return false;
    }
  }

}