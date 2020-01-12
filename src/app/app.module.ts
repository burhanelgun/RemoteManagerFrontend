import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatDialogModule } from  '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatRippleModule} from '@angular/material/core';
import { JobComponent } from './job/job.component';
import { JobService } from './services/job.service';
import { DownloadJobService } from './services/download-job.service';
import { ManageClientsComponent } from './manage-clients/manage-clients.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { IpService } from './services/ip.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateNewJobComponent } from './create-new-job/create-new-job.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MyJobListComponent } from './my-job-list/my-job-list.component';
import { SubJobComponent } from './sub-job/sub-job.component';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      JobComponent,
      ManageClientsComponent,
      DialogBoxComponent,
      CreateNewJobComponent,
      MyJobListComponent,
      SubJobComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatInputModule,
      MatTabsModule,
      MatButtonModule,
      FormsModule,
      HttpClientModule,
      MatCardModule,
      MatToolbarModule,
      MatIconModule,
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      AppRoutingModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatListModule,
      MatSidenavModule,
      MatRadioModule,
      MatTableModule,
      MatRippleModule,
      MatTableModule, 
      MatDialogModule, 
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      MatTableModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatInputModule,
      MatProgressBarModule,
      ReactiveFormsModule
   ],
   providers: [
      AuthGuard,
      AuthService,
      JobService,
      DownloadJobService,
      IpService
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      DialogBoxComponent
    ],
})
export class AppModule { }
