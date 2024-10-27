import { Component } from '@angular/core';

@Component({
  selector: 'app-logarithm-calculator',
  templateUrl: './logarithm-calculator.component.html',
  styleUrls: ['./logarithm-calculator.component.scss']
})
export class LogarithmCalculatorComponent {
  number: number | null = null;
  base: number | null = null;
  result: number | null = null;
  errorMessage: string | null = null;

  calculateLog(): void {
    this.errorMessage = null; // Reset error message

    if (this.base && this.number) {
      if (this.base <= 0 || this.number <= 0) {
        this.errorMessage = 'Base and number must be greater than zero.';
      } else {
        this.result = Math.log(this.number) / Math.log(this.base); // Logarithm formula
      }
    } else {
      this.errorMessage = 'Please enter both base and number.';
    }
  }
}
