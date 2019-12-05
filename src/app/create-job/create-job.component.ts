import { Component, OnInit, Injectable, EventEmitter, Output } from '@angular/core';
import { CreateJob } from '../CreateJob';
import { Observable } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { HomeComponent } from '../home/home.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})

@Injectable()
export class CreateJobComponent implements OnInit {

  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();

  job: CreateJob =new CreateJob();

  constructor(private httpClient: HttpClient,private authService: AuthService) { }

  ngOnInit() {
  }

handleCommandFileInput(files: FileList) {
    this.job.commandFile = files.item(0);
}
handleParametersFileInput(files: FileList) {
  this.job.parametersFile = files.item(0);
}
handleExecutableFileInput(files: FileList) {
  this.job.executableFile = files.item(0);
}
uploadFileToActivity() {
   //this.uploadFile(this.job.commandFile,"uploadCommandFile");
 /*  this.uploadFile(this.job.parametersFile,"uploadParametersFile");
   this.uploadFile(this.job.executableFile,"uploadExecutableFile");*/
}



public uploadFile = () => {

  const formData = new FormData();
  console.log("tto:"+this.authService.email);
  formData.append('email',this.authService.email );
  formData.append('name', this.job.jobName);
  formData.append('commandFile',  this.job.commandFile);
  formData.append('parametersFile',  this.job.parametersFile);
  formData.append('executableFile',  this.job.executableFile);

  this.httpClient.post(`http://192.168.1.37:52440/createjob`, formData, {reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';
        this.onUploadFinished.emit(event.body);
      }
    });
}




}
