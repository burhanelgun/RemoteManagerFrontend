import { Injectable } from '@angular/core';

@Injectable()
export class JobService {
  jobName: string;
  parentJobName: string;
  subJobs =[]; 
  type: string;
  status: string;
  progress: string;
  description: string;

}