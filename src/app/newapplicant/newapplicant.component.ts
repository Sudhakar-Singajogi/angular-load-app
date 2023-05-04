import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import {LoanappService} from "../services/loanapp.service";
import { Router } from '@angular/router';
import { EnumType } from 'typescript';


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
  },
  loanDetails:{
    loanType:string,
    duration:number,
    roi:number,
    emi:number
  },
  status:string
  
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
  },
  loanDetails:{
    loanType:"",
    duration:0.00,
    roi:0.000,
    emi:0.000
  }, 
  status:"new"
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
  customers:any = [];

  constructor(private loanAppService:LoanappService, private router:Router) { 
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
    
    if(param === 'loanDetails') {
      this.newappl.status="new";
      console.log('new applicant info is:', this.newappl);
      
      this.loanAppService.postData(this.newappl, 'customers').subscribe(data => {this.application = data; this.showApplicationId(this.application)} ); 
    }

  }

  showApplicationId(application:any) {
    console.log(application.id);
    this.alerts = [{
      type:"success",
      message:"Application has been created and your applicatio Id is:" + application.id
    }];
    this.nav.select(0);

  }

  loginApplicant(applicationId:string) {

    this.loanAppService.applicantLogin('customers').subscribe(
      data => {
        this.customers = data;
        
        if(this.customers.filter((item:any) => item.id==applicationId).length>0) {
          console.log('login success:', applicationId);
          this.alerts = [];
          this.router.navigate(["applicant/" + applicationId])
        } else {
          this.alerts = [{
            type:"danger",
            message:"No application found with this id: " + applicationId
          }];
        }


      }
    )

  }
  


  ngOnInit(): void {
    console.log(this.alerts);
    this.loanAppService.getData('customers').subscribe(data => console.log(data));
    
  }

}
