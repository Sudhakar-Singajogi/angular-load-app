import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewapplicantComponent } from './newapplicant/newapplicant.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {
    
    component:HomeComponent,
    path:""
  },
  {
    
    component:NewapplicantComponent,
    path:"applicant"
  },
  {    
    component:EmployeeComponent,
    path:"employee"
  },
  {
    component:ApplicantDetailsComponent,
    path:"applicant/:id"
  },
  {
    component:EmployeeDetailsComponent,
    path:"employee/details/:id"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
