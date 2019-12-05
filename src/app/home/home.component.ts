import { Component, OnInit, Injectable } from '@angular/core';
import { Manager } from '../Manager';
import {HttpClient} from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class HomeComponent implements OnInit {

  manager: Manager ={
    email:"",
    password:""
  };

  constructor(private httpClient: HttpClient,private router: Router,private authService: AuthService) {
    console.log("home component start")

  }

  ngOnInit() {
  }

  
signIn():void {
    console.log("(SIGN IN)"+" EMAIL:"+this.manager.email+" PASSWORD:"+this.manager.password);
   this.httpClient.post(`http://192.168.1.37:52440/user/signin`,this.manager).subscribe(
      (data:any)=>{
        if(data=="Signed in"){
          console.log("Signed in block entered");
          this.authService.isAuth=true;
          this.authService.email=this.manager.email;
          console.log("navigate dashboard start");
          this.router.navigate(['create-job']);
          console.log("navigated dashboard done");
          console.log("this.homeComponent.isAuth setted true")

        }
        else{
          this.authService.isAuth=false;
          this.router.navigate(['joblist']);
          console.log("this.homeComponent.isAuth setted false")
        }

  
      });


  }
  signUp(): void {
    console.log("(SIGN UP)"+" EMAIL:"+this.manager.email+" PASSWORD:"+this.manager.password);
        this.httpClient.post(`http://192.168.1.37:52440/user/signup`,this.manager).subscribe(
      (data:any)=>{
        console.log("DATAT="+data);
      }
    )
  }

}
