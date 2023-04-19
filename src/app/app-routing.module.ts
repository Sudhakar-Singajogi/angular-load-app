import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewapplicantComponent } from './newapplicant/newapplicant.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';

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
    component:NewapplicantComponent,
    path:"applicant/:id"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
