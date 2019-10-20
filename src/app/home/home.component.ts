import { Component, OnInit } from '@angular/core';
import { Manager } from '../Manager';
import {HttpClient} from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  manager: Manager ={
    email:"",
    password:""
  };
  router: Router


  constructor(private httpClient: HttpClient) {
   }

  ngOnInit() {
  }

  

  signIn(): void {
    console.log("(SIGN IN)"+" EMAIL:"+this.manager.email+" PASSWORD:"+this.manager.password);
    this.httpClient.get(`http://192.168.1.35:52440/user/${this.manager.email}`).subscribe(
      (dbPassword:any)=>{
        if(dbPassword==this.manager.password){
          console.log("dbPassword="+dbPassword)
        }
      }
    )

  }
  signUp(): void {
    console.log("(SIGN UP)"+" EMAIL:"+this.manager.email+" PASSWORD:"+this.manager.password);
        this.httpClient.post(`http://192.168.1.35:52440/`,this.manager).subscribe(
      (data:any)=>{
        console.log("DATA="+data);
      }
    )
  }

}
