import { Component, OnInit } from '@angular/core';
import { Manager } from '../Manager';
import {HttpClient} from '@angular/common/http';

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


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  signIn(): void {
    console.log("(SIGN IN)"+" EMAIL:"+this.manager.email+" PASSWORD:"+this.manager.password);
    this.httpClient.post('https://localhost:44385/',this.manager).subscribe(
      (data:any)=>{
        console.log("DATA="+data);
      }
    )

  }
  signUp(): void {
    console.log("(SIGN UP)"+" EMAIL:"+this.manager.email+" PASSWORD:"+this.manager.password);
  }

}
