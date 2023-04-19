import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

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

@Component({
  selector: 'app-personaldetailsform',
  templateUrl: './personaldetailsform.component.html',
  styleUrls: ['./personaldetailsform.component.css']
})
export class PersonaldetailsformComponent implements OnInit {

  @Output() selectTab = new EventEmitter<number>()
  @Output() storeFormData = new EventEmitter<any>()
  

  constructor() { }

  ngOnInit(): void {
  }

  sendPersonalData(formData:any) {
    // console.log(formData.value)

    this.storeFormData.emit({"key":'personalDetails', 'formdata':formData.value})
    this.selectTab.emit(1);

  }

}
