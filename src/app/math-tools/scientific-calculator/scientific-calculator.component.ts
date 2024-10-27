import { Component } from '@angular/core';

@Component({
  selector: 'app-scientific-calculator',
  templateUrl: './scientific-calculator.component.html',
  styleUrls: ['./scientific-calculator.component.scss']
})
export class ScientificCalculatorComponent {
  showValue: string = '0';   // Displayed value
  currentValue: string = ''; // Current entered number as a string
  operator: string | null = null; // Current operator
  previousValue: number | null = null; // Value before the operator

  appendNumber(number: string) {
    // Append a number to the current entry
    this.currentValue += number;
    this.showValue = this.currentValue;
  }

  setOperator(op: string) {
    // Set an operator for calculation
    if (this.currentValue) {
      this.previousValue = parseFloat(this.currentValue);
      this.currentValue = '';
      this.operator = op;
    }
  }

  applyFunction(func: string) {
    // Apply scientific functions
    const value = parseFloat(this.currentValue || '0');
    switch (func) {
      case 'sin':
        this.showValue = Math.sin(value).toString();
        break;
      case 'cos':
        this.showValue = Math.cos(value).toString();
        break;
      case 'tan':
        this.showValue = Math.tan(value).toString();
        break;
      case 'sqrt':
        this.showValue = Math.sqrt(value).toString();
        break;
    }
    this.currentValue = this.showValue;
  }

  calculate() {
    // Perform the calculation based on the operator
    if (this.operator && this.previousValue !== null) {
      const currentValue = parseFloat(this.currentValue || '0');
      switch (this.operator) {
        case '+':
          this.showValue = (this.previousValue + currentValue).toString();
          break;
        case '-':
          this.showValue = (this.previousValue - currentValue).toString();
          break;
        case '*':
          this.showValue = (this.previousValue * currentValue).toString();
          break;
        case '/':
          this.showValue = currentValue !== 0 ? (this.previousValue / currentValue).toString() : 'Error';
          break;
      }
      this.currentValue = this.showValue;
      this.operator = null;
      this.previousValue = null;
    }
  }

  clear() {
    // Clear the calculator state
    this.showValue = '0';
    this.currentValue = '';
    this.operator = null;
    this.previousValue = null;
  }
}
