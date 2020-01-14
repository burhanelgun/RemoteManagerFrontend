import { Component, OnInit, Injectable } from '@angular/core';
import { Manager } from '../Manager';
import {HttpClient} from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { IpService } from '../services/ip.service';

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

  constructor(private ipService: IpService,private httpClient: HttpClient,private router: Router,private authService: AuthService) {

  }

  ngOnInit() {
  }

  
signIn():void {
   this.httpClient.post(`http://${this.ipService.ip}:52440/user/signin`,this.manager).subscribe(
      (data:any)=>{
        if(data=="Signed in"){
          this.authService.isAuth=true;
          this.authService.email=this.manager.email;
          this.router.navigate(['create-new-job']);


        }
        else{
          this.authService.isAuth=false;
          this.router.navigate(['joblist']);
        }

  
      });


  }
  signUp(): void {
        this.httpClient.post(`http://${this.ipService.ip}:52440/user/signup`,this.manager).subscribe(
      (data:any)=>{
      }
    )
  }

}
