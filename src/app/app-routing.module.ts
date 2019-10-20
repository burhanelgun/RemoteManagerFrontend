import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Add this
import { DashboardComponent } from './dashboard/dashboard.component';
import { JoblistComponent } from './joblist/joblist.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'joblist', component: JoblistComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
