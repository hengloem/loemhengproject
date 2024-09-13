import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.css']
})
export class LoanCalculatorComponent {
  loanAmount: number = 0;
  annualInterestRate: number = 0;
  loanTerm: number = 0;
  monthlyPayment: number | null = null;

  calculateLoan() {
    const monthlyInterestRate = this.annualInterestRate / 100 / 12;
    const numberOfPayments = this.loanTerm * 12;
    
    if (monthlyInterestRate === 0) {
      this.monthlyPayment = this.loanAmount / numberOfPayments;
    } else {
      this.monthlyPayment = (this.loanAmount * monthlyInterestRate) / 
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    }
  }
}
