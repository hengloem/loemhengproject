import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  displayValue = '0';
  buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];
  currentOperand = '';
  operator = '';
  previousOperand = '';

  onButtonClick(button: string) {
    if (!isNaN(Number(button)) || button === '.') {
      this.appendNumber(button);
    } else if (button === 'C') {
      this.clear();
    } else if (button === '=') {
      this.calculate();
    } else {
      this.chooseOperator(button);
    }
  }

  appendNumber(number: string) {
    if (this.displayValue === '0' && number !== '.') {
      this.displayValue = number;
    } else {
      this.displayValue += number;
    }
  }

  clear() {
    this.displayValue = '0';
    this.currentOperand = '';
    this.previousOperand = '';
    this.operator = '';
  }

  chooseOperator(operator: string) {
    if (this.displayValue !== '') {
      this.previousOperand = this.displayValue;
      this.operator = operator;
      this.displayValue = '';
    }
  }

  calculate() {
    let result: number;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.displayValue);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }

    this.displayValue = result.toString();
    this.operator = '';
    this.previousOperand = '';
    this.currentOperand = '';
  }
}
