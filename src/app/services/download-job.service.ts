
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { JobService } from './job.service';
import { map} from 'rxjs/operators';
import { IpService } from './ip.service';

@Injectable()
export class DownloadJobService {

    constructor(public ipService: IpService,private httpClient: HttpClient,private authService: AuthService,private jobService: JobService) { }


    
  DownloadFile(filePath: string, fileType:string): Observable<any>{

    const formData = new FormData();
    formData.append('email',this.authService.email );
    formData.append('jobName',filePath );


    return this.httpClient.post(`http://${this.ipService.ip}:52440/downloadJob`, formData,
    { responseType: 'arraybuffer'



        }).pipe(
        map((res: any) => {
            return new Blob([res], {
                type: fileType
              });
          })
    );
  }
  
  



}
