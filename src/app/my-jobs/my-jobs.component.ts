import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Job } from '../Job';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.scss']
})
export class MyJobsComponent implements OnInit {


  //Job objelerinin json a çevirlmiş halidir
  private jobs =[]; 
  displayedColumns: string[] = ['id', 'name', 'isDone', 'type','managerName','clientName','path'];

  constructor(private httpClient: HttpClient,private authService: AuthService) { }


  ngOnInit() {

    this.getJobs();
  }


  getJobs(){
  
    this.httpClient.get(`http://192.168.1.34:52440/my-jobs/${this.authService.email}`).subscribe((res : any[])=>{
      this.jobs = res;
    });

  }

  getRecord(r :string){
    console.log("hahaha:"+r);

  }


}
