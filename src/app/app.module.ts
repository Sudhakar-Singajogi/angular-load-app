import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewapplicantComponent } from './newapplicant/newapplicant.component';
import { HomeComponent } from './home/home.component';
import { RecentFeederComponent } from './recent-feeder/recent-feeder.component';
import { EmployeeComponent } from './employee/employee.component';
import { ApplicantloginComponent } from './applicantlogin/applicantlogin.component';
import { PersonaldetailsformComponent } from './personaldetailsform/personaldetailsform.component';
import { CommunicationdetailsformComponent } from './communicationdetailsform/communicationdetailsform.component';
import { FinancialdetailsformComponent } from './financialdetailsform/financialdetailsform.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    NewapplicantComponent,
    HomeComponent,
    RecentFeederComponent,
    EmployeeComponent,
    ApplicantloginComponent,
    PersonaldetailsformComponent,
    CommunicationdetailsformComponent,
    FinancialdetailsformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbNavModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
