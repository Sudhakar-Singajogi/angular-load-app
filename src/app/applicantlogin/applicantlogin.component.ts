import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-applicantlogin',
  templateUrl: './applicantlogin.component.html',
  styleUrls: ['./applicantlogin.component.css']
})
export class ApplicantloginComponent implements OnInit {

  @Output() loginApplicant = new EventEmitter();
  constructor() { }
  
  login(applicationId:string) {
    this.loginApplicant.emit(applicationId);
  }

  ngOnInit(): void {
  }

}
