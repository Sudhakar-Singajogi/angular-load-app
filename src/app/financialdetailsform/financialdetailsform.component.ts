import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-financialdetailsform',
  templateUrl: './financialdetailsform.component.html',
  styleUrls: ['./financialdetailsform.component.css']
})
export class FinancialdetailsformComponent implements OnInit {

  @Output() storeFormData = new EventEmitter<any>()
  @Output() selectTab = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  submitApplication(finacialData:any) {
    this.storeFormData.emit(
      {
        "key":"financialDetails",
        'formdata':finacialData.value
      }
    )
    
    this.selectTab.emit(3);

  }

}
