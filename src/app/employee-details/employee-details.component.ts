import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {employeeDetails, storeEmployee} from "../actions/employee.actions"

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  
  employeeDetails:any={};

  constructor(public store:Store<any>) { 
    this.employeeDetails = {

    }
  }

  ngOnInit(): void {
    this.store.select('empDetails').subscribe((data)=>{ console.log("employee data from store:", data); this.employeeDetails = data });
  }
  

}
