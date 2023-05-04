import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { Subject, BehaviorSubject } from 'rxjs';
import {employeeDetails, storeEmployee} from "../actions/employee.actions"
import { Router } from '@angular/router';
import {LoanappService} from "../services/loanapp.service";
import {EmployeeLoginService} from "../services/employeeLogin.service"


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

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  
  employeeDetails:any={};
  public loginDetails = new BehaviorSubject([]);
  
  employee:object = {};
  customers:any = NEWAPPL;

  constructor(public store:Store<any>, private employeeLoginService:EmployeeLoginService, private router:Router, private loanAppService:LoanappService) { 
    this.employeeDetails = { }
    this.employeeLoginService.empDetails.subscribe((data) => this.setEmployeeDetails(data));
    
  }

  ngOnInit(): void {    
    this.loanAppService.getData('customers').subscribe(data => this.getCustomers(data));    
  }
  getCustomers(applicants:any) {
    console.log('applicants:', applicants)
    this.customers = applicants
    }

  setEmployeeDetails(empDetails:any) {
    this.employeeDetails = empDetails.employeeDetails;
    
    if(typeof this.employeeDetails == 'object') {
      const empdet = {
        employeeDetails:empDetails.employeeDetails
      }
      localStorage.setItem( 'employeeDetails', JSON.stringify(empDetails.employeeDetails));
    } else {
      
      let localEmpDetails =   JSON.parse(localStorage.getItem('employeeDetails') || '{}')

      if(localEmpDetails.length === 0) {
        this.router.navigate(["/employee"])  
      } else {
        this.employeeLoginService.setEmpDetails({
          "employeeDetails":localEmpDetails
        })
        this.employeeDetails = localEmpDetails;
        localStorage.setItem( 'employeeDetails', JSON.stringify(this.employeeDetails)  );
      }

    }

    
  }

  getLoadDetails(loadId:string) {
    console.log('loanId:', loadId)
  }
  

}
