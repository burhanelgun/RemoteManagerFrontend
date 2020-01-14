import { Component, OnInit, Injectable, EventEmitter, Output } from '@angular/core';
import { Job } from '../Job';
import { Observable } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { HomeComponent } from '../home/home.component';
import { AuthService } from '../services/auth.service';
import { IpService } from '../services/ip.service';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-new-job',
  templateUrl: './create-new-job.component.html',
  styleUrls: ['./create-new-job.component.scss']
})

@Injectable()
export class CreateNewJobComponent implements OnInit {

  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();

  job: Job =new Job();
  public command: string;
  public jobTypes = ['Single Job', 'Job Batch'];
  public executableJobTypes = ['Different Parameters', 'Different Input Files'];
  public selectedJobType = this.jobTypes[0];
  durationInSeconds = 5;

  productForm: FormGroup;


  constructor(private _snackBar: MatSnackBar,private fb: FormBuilder,public ipService: IpService,private httpClient: HttpClient,private authService: AuthService) { }

  ngOnInit() {
    //default job type is Executable
    this.job.type=this.executableJobTypes[0];
    this.productForm = this.fb.group({
      parameter_sets: this.fb.array([this.fb.group({point:''})])
    })
  }
  get parameterSets() {
    return this.productForm.get('parameter_sets') as FormArray;
  }

  addParameterSet() {
    this.parameterSets.push(this.fb.group({point:''}));
  }

  deleteParameterSet(index) {
    this.parameterSets.removeAt(index);
  }
  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

handleCommandFileInput(files: FileList) {
    this.job.commandFile = files.item(0);
}
handleExecutableFileInput(files: FileList) {
  this.job.executableFile = files.item(0);
}
handleArchiveFolder(fileList: FileList) {
  this.job.files=fileList;
}

handlePythonScriptInput(files: FileList) {
  this.job.pythonScriptFile = files.item(0);
}
handleExecutableFilesInput(files: FileList) {
  this.job.executableFiles = files;
}
handleParametersFileInput(files: FileList) {
  this.job.parametersFile = files.item(0);
}
handleInputFilesInput(fileList: FileList) {
  this.job.inputFiles=fileList;
}
handleParametersFilesInput(fileList: FileList) {
  this.job.parametersFiles = fileList
}



uploadInputsBatchJobFile= () => {
  this.openSnackBar()
  const formData = new FormData();
  formData.append('email',this.authService.email );
  formData.append('name', this.job.jobName);
  formData.append('pythonScriptFile',  this.job.pythonScriptFile);
  formData.append('parametersFile',  this.job.parametersFile);

  for (var i = 0; i < this.job.executableFiles.length; i++) {
    formData.append("executableFiles",  this.job.executableFiles.item(i));
  }
  for (var i = 0; i < this.job.inputFiles.length; i++) {
    formData.append("inputFiles",  this.job.inputFiles.item(i));
  }
  formData.append('jobType',  this.job.type);


  this.httpClient.post(`http://${this.ipService.ip}:52440/createinputsbatchjob`, formData, {reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';
        this.onUploadFinished.emit(event.body);
      }
    });
}

uploadParametersBatchJobFile= () => {
  this.openSnackBar()
  const formData = new FormData();
  formData.append('email',this.authService.email );
  formData.append('name', this.job.jobName);
  formData.append('pythonScriptFile',  this.job.pythonScriptFile);
  formData.append('parametersFile',  this.job.parametersFile);

  for (var i = 0; i < this.job.executableFiles.length; i++) {
    formData.append("executableFiles",  this.job.executableFiles.item(i));
  }
  for (var i = 0; i < this.job.inputFiles.length; i++) {
    formData.append("inputFiles",  this.job.inputFiles.item(i));
  }
  formData.append('jobType',  this.job.type);


  this.httpClient.post(`http://${this.ipService.ip}:52440/createparametersbatchjob`, formData, {reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';
        this.onUploadFinished.emit(event.body);
      }
    });
}


public uploadSingleJobFiles = () => {
  this.openSnackBar()
  const formData = new FormData();
  formData.append('email',this.authService.email );
  formData.append('name', this.job.jobName);
  formData.append('pythonScriptFile',  this.job.pythonScriptFile);
  formData.append('parametersFile',  this.job.parametersFile);

  for (var i = 0; i < this.job.executableFiles.length; i++) {
    formData.append("executableFiles",  this.job.executableFiles.item(i));
  }
  for (var i = 0; i < this.job.inputFiles.length; i++) {
    formData.append("inputFiles",  this.job.inputFiles.item(i));
  }
  formData.append('jobType',  this.selectedJobType);


  this.httpClient.post(`http://${this.ipService.ip}:52440/createsinglejob`, formData, {reportProgress: true, observe: 'events'})
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
