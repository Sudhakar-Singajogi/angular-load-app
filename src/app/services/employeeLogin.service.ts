import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLoginService {

  //2. Create the data which we want to share with all the components
  private employeeDetails = new BehaviorSubject({});

  //3. Now we want to broadcast this message or data, so we create an observable
  empDetails = this.employeeDetails.asObservable();

  constructor() { }

  //4. Create a method that updates the data (Behaviour Subject)
  setEmpDetails(empDetails:any){
    this.employeeDetails.next(empDetails);
  }
}