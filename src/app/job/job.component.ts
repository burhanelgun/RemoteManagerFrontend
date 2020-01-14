import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { DownloadJobService } from '../services/download-job.service';
import { saveAs } from 'file-saver';
import { IpService } from '../services/ip.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  constructor(private ipService: IpService,private downloadJobService: DownloadJobService,private httpClient: HttpClient,private authService: AuthService,private jobService: JobService) { }

  interval: any;
  job: any;

 
  ngOnInit() {
    this.getJob();
    this.interval = setInterval(() => { 
      this.getJob();
    }, 500);
  }


  getJob(){
  
    this.httpClient.get(`http://${this.ipService.ip}:52440/get-job/${this.authService.email}/${this.jobService.jobName}`).subscribe((res : any)=>{
      this.job = res;
      console.log("job:"+this.job);
    });

  }






  downloadFiles(){  

    
   
    this.downloadJobService.DownloadFile(this.jobService.jobName+".zip", "application/zip")
    .subscribe(
              success => {
                saveAs(success, this.jobService.jobName+".zip"); 
              },
              err => {
                  alert("Server error while downloading file."+err);
              }
          );
  }

  stopJob(){  




    const formData = new FormData();
    formData.append('email',this.authService.email );
    formData.append('jobName',this.jobService.jobName );



  

    this.httpClient.post(`http://${this.ipService.ip}:52440/job/stopJob`,formData).subscribe(
      (data:any)=>{
        if(data=="Signed in"){
          console.log("ok");


        }
        else{
          console.log("problem");

        }

  
      });


   
 
  }


}
