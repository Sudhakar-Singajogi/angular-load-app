import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-communicationdetailsform',
  templateUrl: './communicationdetailsform.component.html',
  styleUrls: ['./communicationdetailsform.component.css']
})
export class CommunicationdetailsformComponent implements OnInit {

  constructor() { }
  
  @Input() currentAddress="";
  @Output() setCurrentAdd = new EventEmitter<string>()
  @Output() selectTab = new EventEmitter<number>()
  
  @Output() storeFormData = new EventEmitter<any>()

  ngOnInit(): void {    
  }

  setPermanentToCurrentAddress(elem:any, address:string) {
    console.log(elem.target.value);
    
    (elem.target.value === 'Yes') ? this.setCurrentAdd.emit(address) : this.setCurrentAdd.emit('');
  }

  sendCommunicationData(formData:any) {
    console.log('communication data is:', formData.value)

    this.storeFormData.emit({"key":'communicationDetails', 'formdata':formData.value})
    this.selectTab.emit(2);

  }

}
