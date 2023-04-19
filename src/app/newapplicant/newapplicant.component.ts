import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import {LoanappService} from "../services/loanapp.service";

interface Alert {
  type: string;
  message: string;
}

interface NewApplication {
  personalDetails:{
    userName:string,
    fullName:string,
    dob:string,
    maritalStatus:string,
    gender:string
  },
  communicationDetails:{
    mobileNumber:string,
    alternateNumber:string,
    permanentAddress:string,
    currentAddress:string,
  },
  financialDetails:{
    panNumber:string,
    isSalaried:string,
    monthlySalary:string
  }
  
}

const NEWAPPL: NewApplication = {
  personalDetails:{
    userName:"",
    fullName:"",
    dob:"",
    maritalStatus:"",
    gender:""
  },
  communicationDetails:{
    mobileNumber:"",
    alternateNumber:"",
    permanentAddress:"",
    currentAddress:"",
  },
  financialDetails:{
    panNumber:"",
    isSalaried:"",
    monthlySalary:""
  }
}


const ALERTS: Alert[] = [
//   {
//   type: 'success',
//   message: 'New application has been created',
// },
//  {
//   type: 'info',
//   message: 'This is an info alert',
// }, {
//   type: 'warning',
//   message: 'This is a warning alert',
// }, {
//   type: 'danger',
//   message: 'This is a danger alert',
// }, {
//   type: 'primary',
//   message: 'This is a primary alert',
// }, {
//   type: 'secondary',
//   message: 'This is a secondary alert',
// }, {
//   type: 'light',
//   message: 'This is a light alert',
// }, {
//   type: 'dark',
//   message: 'This is a dark alert',
// }
];

@Component({
  selector: 'app-newapplicant',
  templateUrl: './newapplicant.component.html',
  styleUrls: ['./newapplicant.component.css'],

})

export class NewapplicantComponent implements OnInit {
  @ViewChild("nav")
  nav:any
  active = 0;
  alerts = ALERTS;
  currentAddress:string = '';
  newappl:any = NEWAPPL;
  application:object = {};
  

  constructor(private loanAppService:LoanappService) { 
    model:''
    alerts: ALERTS
    this.currentAddress=""; 
    this.active=0;
    this.newappl = {};
    
    
  }

  setCurrentAddress(address:string) {
    this.currentAddress = address;
  }
  
  close(alert: Alert) {
    // this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  selectTab(tabId:string) {
    this.nav.select(parseInt(tabId));
  }

  storeFormData(formData:any) {    
    const param = formData.key
    this.newappl[param] = formData.formdata;    
    
    if(param === 'financialDetails') {
      this.loanAppService.postData(this.newappl, 'customers').subscribe(data => {this.application = data; this.showApplicatioId(this.application)} ); 
    }

  }

  showApplicatioId(application:any) {
    console.log(application.id);
    this.alerts = [{
      type:"success",
      message:"Application has been created and your applicatio Id is:" + application.id
    }];
    this.nav.select(0);

  }
  


  ngOnInit(): void {
    console.log(this.alerts);
    this.loanAppService.getData('customers').subscribe(data => console.log(data));
    
  }

}
