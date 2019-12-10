import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Job } from '../Job';
import { JobService } from '../services/job.service';
import { IpService } from '../services/ip.service';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.scss']
})
export class MyJobsComponent implements OnInit {


  //Job objelerinin json a çevirlmiş halidir
  private jobs =[]; 
  displayedColumns: string[] = ['name', 'status', 'type','clientName'];
  interval: any;

  constructor(public ipService: IpService,private httpClient: HttpClient,private authService: AuthService,private jobService: JobService) { }


  ngOnInit() {
    this.getJobs();
    this.interval = setInterval(() => { 
      this.getJobs();
    }, 5000);
  }


  getJobs(){
  
    this.httpClient.get(`http://${this.ipService.ip}:52440/my-jobs/${this.authService.email}`).subscribe((res : any[])=>{
      this.jobs = res;
    });

  }
  getRecord(jobName :string){

    this.jobService.jobName = jobName;


  }

  


}
