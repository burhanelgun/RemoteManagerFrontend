import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Add this
import { DashboardComponent } from './dashboard/dashboard.component';
import { JoblistComponent } from './joblist/joblist.component';
import { CreateJobComponent } from './create-job/create-job.component';

import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'joblist', component: JoblistComponent},
  { path: 'create-job', component: CreateJobComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
