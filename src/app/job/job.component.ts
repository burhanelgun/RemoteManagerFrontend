import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { DownloadJobService } from '../services/download-job.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  constructor(private downloadJobService: DownloadJobService,private httpClient: HttpClient,private authService: AuthService,private jobService: JobService) { }





  ngOnInit() {
    this.getJobDatas();
  }

  
  getJobDatas(){
  
   
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




}
