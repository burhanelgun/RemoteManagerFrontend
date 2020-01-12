import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Add this
import { CreateNewJobComponent } from './create-new-job/create-new-job.component';
import { JobComponent } from './job/job.component';
import { ManageClientsComponent } from './manage-clients/manage-clients.component';

import {AuthGuard} from './guards/auth.guard';
import { MyJobListComponent } from './my-job-list/my-job-list.component';
import { SubJobComponent } from './sub-job/sub-job.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'my-job-list', component: MyJobListComponent, canActivate: [AuthGuard]},
  { path: 'create-new-job', component: CreateNewJobComponent, canActivate: [AuthGuard]},
  { path: 'job',  component:JobComponent, canActivate: [AuthGuard] },
  { path: 'sub-job',  component:SubJobComponent, canActivate: [AuthGuard] },
  { path: 'manage-clients',  component:ManageClientsComponent, canActivate: [AuthGuard] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
