import { Component, OnInit } from '@angular/core';
import {LoanappService} from "../services/loanapp.service";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Store} from "@ngrx/store";
import {employeeDetails, storeEmployee} from "../actions/employee.actions"

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
  status:"new"
}

interface employeeInter {
      "id": number,
      "name": string,
      "role": string,
      "password":string
}

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:object = [];
  customers:any = NEWAPPL;
  
  alerts = ALERTS;
  constructor(private loanAppService:LoanappService, private router:Router, public store:Store<any>) { 
    this.employees = [];
    alerts: ALERTS
  }
  close(alert: Alert) {
    // this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  ngOnInit(): void {
    this.loanAppService.getData('customers').subscribe(data => this.getCustomers(data));    
    
    }

  getCustomers(applicants:any) {
  console.log('applicants:', applicants)
  this.customers = applicants
  }

  validateEmployeeLogin(loginForm:any) {
    const formData = loginForm.value;
    // console.log(formData);

    if(formData.name === "" ||  formData.password === "") {
      this.alerts = [{
        type:"danger",
        message:"All fields are mandatory"
      }];
      // return false
    } else {

      this.loanAppService.getData('employees/?q=' + formData.name).subscribe((data:any) => {    
      
        if(Object.keys(data).length > 0) {
          const empDet = data[0];
            if(empDet.password !== formData.password) {
                this.alerts = [{
                  type:"danger",
                  message:"Seems you have entered in valid credentials "
                }];  
            } else {
              this.alerts = [];
              this.router.navigate(["employee/details/" + empDet.id])
              this.addEmployeeStore(empDet);
              }
  
          } else {
            this.alerts = [{
              type:"danger",
              message:"Seems you have entered in valid credentials"
            }];
          }
        } 
      )
    }      
  }

  addEmployeeStore(refEmployee:employeeInter) {
  this.store.dispatch( storeEmployee({payload:refEmployee} ) )
  }

}
