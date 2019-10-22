import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { Observable,  of as observableOf } from 'rxjs';
import { AuthService } from '../services/auth.service';




@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router:Router,private authService:AuthService){

    }
    
    canActivate(): Observable<boolean>{
        if(!this.authService.isLoggedIn){
            this.router.navigate(['']);
            console.log("yalan")

            return observableOf(false);
        }
        else{
            console.log("dogru")

            return observableOf(true);
        }
    }

    
}