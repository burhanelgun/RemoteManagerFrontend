import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Add this
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyJobsComponent } from './my-jobs/my-jobs.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { CreateNewJobComponent } from './create-new-job/create-new-job.component';
import { JobComponent } from './job/job.component';
import { ManageClientsComponent } from './manage-clients/manage-clients.component';

import {AuthGuard} from './guards/auth.guard';
import { MyJobListComponent } from './my-job-list/my-job-list.component';
import { SubJobComponent } from './sub-job/sub-job.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'my-jobs', component: MyJobsComponent},
  { path: 'my-job-list', component: MyJobListComponent},
  { path: 'create-job', component: CreateJobComponent},
  { path: 'create-new-job', component: CreateNewJobComponent},
  { path: 'job',  component:JobComponent },
  { path: 'sub-job',  component:SubJobComponent },
  { path: 'manage-clients',  component:ManageClientsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
