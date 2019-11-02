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
import { DashboardComponent } from './dashboard/dashboard.component';
import { JoblistComponent } from './joblist/joblist.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from  '@angular/material';
import { CreateJobComponent } from './create-job/create-job.component';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      DashboardComponent,
      JoblistComponent,
      CreateJobComponent
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
      MatSidenavModule
   ],
   providers: [
      AuthGuard,
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
