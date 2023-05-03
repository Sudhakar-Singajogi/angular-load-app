import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { Subject, BehaviorSubject } from 'rxjs';
import {employeeDetails, storeEmployee} from "../actions/employee.actions"
import { Router } from '@angular/router';
import {EmployeeLoginService} from "../services/employeeLogin.service"

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  
  employeeDetails:any={};
  public loginDetails = new BehaviorSubject([]);

  constructor(public store:Store<any>, private employeeLoginService:EmployeeLoginService, private router:Router,) { 
    this.employeeDetails = { }
    this.employeeLoginService.empDetails.subscribe((data) => this.setEmployeeDetails(data));
    
  }

  ngOnInit(): void {    
    
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
  

}
