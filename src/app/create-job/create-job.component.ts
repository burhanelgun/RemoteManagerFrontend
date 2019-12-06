import { Component, OnInit, Injectable, EventEmitter, Output } from '@angular/core';
import { Job } from '../Job';
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

  job: Job =new Job();
  public jobTypes = ['Executable', 'Archiver'];


  constructor(private httpClient: HttpClient,private authService: AuthService) { }

  ngOnInit() {
    //default job type is Executable
    this.job.type=this.jobTypes[0];
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

handleArchiveFolder(fileList: FileList) {
  this.job.files=fileList;
}

uploadFileToActivity() {
   //this.uploadFile(this.job.commandFile,"uploadCommandFile");
 /*  this.uploadFile(this.job.parametersFile,"uploadParametersFile");
   this.uploadFile(this.job.executableFile,"uploadExecutableFile");*/
}



public uploadExecutableJobFiles = () => {

  const formData = new FormData();
  console.log("tto:"+this.authService.email);
  formData.append('email',this.authService.email );
  formData.append('name', this.job.jobName);
  formData.append('commandFile',  this.job.commandFile);
  formData.append('parametersFile',  this.job.parametersFile);
  formData.append('executableFile',  this.job.executableFile);
  formData.append('jobType',  this.job.type);

  this.httpClient.post(`http://192.168.1.34:52440/createexecutablejob`, formData, {reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';
        this.onUploadFinished.emit(event.body);
      }
    });
}

public uploadArchiveJobFolder = () => {

  const formData = new FormData();
  console.log("tto:"+this.authService.email);
  formData.append('email',this.authService.email );
  formData.append('name', this.job.jobName);
  formData.append('jobType',  this.job.type);


  for (var i = 0; i < this.job.files.length; i++) {
    formData.append("folders",  this.job.files.item(i));
    //console.log("folders = "+ this.job.files.item(i));

  }

  this.httpClient.post(`http://192.168.1.34:52440/createarchiverjob`, formData, {reportProgress: true, observe: 'events'})
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
