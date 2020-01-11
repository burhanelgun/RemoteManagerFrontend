import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Job } from '../Job';
import { JobService } from '../services/job.service';
import { IpService } from '../services/ip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-job-list',
  templateUrl: './my-job-list.component.html',
  styleUrls: ['./my-job-list.component.scss']
})
export class MyJobListComponent implements OnInit {


  //Job objelerinin json a çevirlmiş halidir
  private jobs =[]; 
  displayedColumns: string[] = ['name', 'progress', 'type','clientName'];
  interval: any;

  constructor(public router: Router,public ipService: IpService,private httpClient: HttpClient,private authService: AuthService,private jobService: JobService) { }


  ngOnInit() {
    this.getJobs();
    this.interval = setInterval(() => { 
      this.getJobs();
    }, 5000);
  }


  getJobs(){
  
    this.httpClient.get(`http://${this.ipService.ip}:52440/my-job-list/${this.authService.email}`).subscribe((res : any[])=>{
      this.jobs = res;
    });

  }
  getRecord(jobName :string,type :string){

    if(type=="Single Job"){
      
      this.jobService.jobName = jobName;

      this.router.navigate(['/job']);
    }
    else{
      this.jobService.parentJobName = jobName;

      this.router.navigate(['/sub-job']);


    }
  
    
    

  }

  


}
