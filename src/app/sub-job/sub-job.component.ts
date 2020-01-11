import { Component, OnInit } from '@angular/core';
import { IpService } from '../services/ip.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-sub-job',
  templateUrl: './sub-job.component.html',
  styleUrls: ['./sub-job.component.scss']
})
export class SubJobComponent implements OnInit {

//Job objelerinin json a çevirlmiş halidir
private jobs =[]; 
displayedColumns: string[] = ['name', 'status', 'type','clientName'];
interval: any;

constructor(public ipService: IpService,private httpClient: HttpClient,private authService: AuthService,private jobService: JobService) { }


ngOnInit() {
  this.getJobs();
  this.interval = setInterval(() => { 
    this.getJobs();
  }, 500);
}


getJobs(){

  this.httpClient.get(`http://${this.ipService.ip}:52440/my-subjob-list/${this.authService.email}/${this.jobService.parentJobName}`).subscribe((res : any[])=>{
    this.jobs = res;
  });

}
getRecord(jobName :string){

  this.jobService.jobName = jobName;


}


}
