import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { Observable,  of as observableOf } from 'rxjs';
import { AuthService } from '../services/auth.service';




@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router:Router,private authService:AuthService){
        console.log("auth guard start")
    }
    
    canActivate(): Observable<boolean>{
        console.log("canActivate start")

        if(this.authService.isLoggedIn()){
            //this.router.navigate(['']);
            console.log("CAN ACTIVATE TRUE")
            return observableOf(true);
        }
        else{
            console.log("CAN ACTIVATE FALSE")
            return observableOf(false);
        }
    }

    
}