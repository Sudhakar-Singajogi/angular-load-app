import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-loan-application-form',
  templateUrl: './loan-application-form.component.html',
  styleUrls: ['./loan-application-form.component.css']
})
export class LoanApplicationFormComponent implements OnInit {
  
  loanTypes:any={
    "Personal":10.5,
    "Housing":7.5,
    "Education":9.78,
    "Vehicle":18.78
  }

  loanType:string='';
  loanAmount:number=0;
  loanDuration:number=0;
  roi:number=0;
  emi:any=0;
  totalInterestPayable:any=0;
  totalpayment:any=0;

  constructor() {
    

  }

  ngOnInit(): void {
  }

  setLoanType(loanType:any) {
    if(loanType !== '0') {
      console.log(this.loanTypes[loanType]);
      this.roi = this.loanTypes[loanType];
      if(this.loanAmount > 0 && this.loanDuration > 0 && this.loanDuration > 0)  {
        this.emi = this.calculateEMI(this.loanAmount, this.roi, this.loanDuration);
        this.showBreakup()
      }

    } else {
      this.roi = 0;
      console.log('select loan type');
    }
  }

  setLoanAmount(loanAmountEvent:any) {
    this.loanAmount = loanAmountEvent.target.value;
    if(this.loanAmount > 0 && this.loanDuration > 0 && this.loanDuration > 0)  {
      this.emi = this.calculateEMI(this.loanAmount, this.roi, this.loanDuration);
      this.showBreakup()
    }
  }
  
  setLoanDuration(loanDurationEvent:any) {
    this.loanDuration = loanDurationEvent.target.value;
    if(this.loanAmount > 0 && this.loanDuration > 0 && this.loanDuration > 0)  {
      this.emi = this.calculateEMI(this.loanAmount, this.roi, this.loanDuration);
      this.showBreakup()
    }
  }

  calculateEMI(principal:any, interestRate:any, tenure:any) {
    const monthlyInterestRate = (interestRate / 100) / 12;
    const totalNumberOfMonths = tenure * 12;
    const numerator = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalNumberOfMonths);
    const denominator = Math.pow(1 + monthlyInterestRate, totalNumberOfMonths) - 1;
    const emi = Math.ceil(numerator / denominator).toFixed(2);
    return emi;
  }

  showBreakup() {
    this.totalpayment = (this.loanDuration * 12 * this.emi);
    this.totalInterestPayable = (this.totalpayment - this.loanAmount);
    
    this.totalpayment = this.totalpayment.toLocaleString("en-IN");
    this.totalInterestPayable = this.totalInterestPayable.toLocaleString("en-IN")
  }

}
