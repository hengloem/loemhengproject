import { Component } from '@angular/core';

@Component({
  selector: 'app-scientific-calculator-advance',
  templateUrl: './scientific-calculator-advance.component.html',
  styleUrls: ['./scientific-calculator-advance.component.scss']
})
export class ScientificCalculatorAdvanceComponent {
  showValue: string = '0';
  currentValue: string = '';
  operator: string | null = null;
  previousValue: number | null = null;
  memory: number = 0;
  isDegreeMode: boolean = true;

  appendNumber(number: string) {
    this.currentValue += number;
    this.showValue = this.currentValue;
  }

  setOperator(op: string) {
    if (this.currentValue) {
      this.previousValue = parseFloat(this.currentValue);
      this.currentValue = '';
      this.operator = op;
    }
  }

  appendSymbol(symbol: string) {
    this.currentValue += symbol;
    this.showValue = this.currentValue;
  }

  appendConstant(constant: string) {
    if (constant === 'π') {
      this.currentValue = Math.PI.toString();
    } else if (constant === 'e') {
      this.currentValue = Math.E.toString();
    }
    this.showValue = this.currentValue;
  }

  applyFunction(func: string) {
    const value = parseFloat(this.currentValue || '0');
    let result;
    switch (func) {
      case 'sin':
        result = Math.sin(this.isDegreeMode ? this.toRadians(value) : value);
        break;
      case 'cos':
        result = Math.cos(this.isDegreeMode ? this.toRadians(value) : value);
        break;
      case 'tan':
        result = Math.tan(this.isDegreeMode ? this.toRadians(value) : value);
        break;
      case 'asin':
        result = this.isDegreeMode ? this.toDegrees(Math.asin(value)) : Math.asin(value);
        break;
      case 'acos':
        result = this.isDegreeMode ? this.toDegrees(Math.acos(value)) : Math.acos(value);
        break;
      case 'atan':
        result = this.isDegreeMode ? this.toDegrees(Math.atan(value)) : Math.atan(value);
        break;
      case 'sqrt':
        result = Math.sqrt(value);
        break;
      case 'ln':
        result = Math.log(value);
        break;
      case 'log':
        result = Math.log10(value);
        break;
      case 'x2':
        result = Math.pow(value, 2);
        break;
      case 'x3':
        result = Math.pow(value, 3);
        break;
      case 'exp':
        result = Math.exp(value);
        break;
      case '10x':
        result = Math.pow(10, value);
        break;
      case 'percent':
        result = value / 100;
        break;
      case 'inverse':
        result = 1 / value;
        break;
      case 'factorial':
        result = this.factorial(value);
        break;
    }
    this.showValue = result.toString();
    this.currentValue = this.showValue;
  }

  calculate() {
    const currentValue = parseFloat(this.currentValue || '0');
    let result;
    switch (this.operator) {
      case '+':
        result = this.previousValue! + currentValue;
        break;
      case '-':
        result = this.previousValue! - currentValue;
        break;
      case '*':
        result = this.previousValue! * currentValue;
        break;
      case '/':
        result = currentValue !== 0 ? this.previousValue! / currentValue : 'Error';
        break;
      case '^':
        result = Math.pow(this.previousValue!, currentValue);
        break;
    }
    this.showValue = result.toString();
    this.currentValue = this.showValue;
    this.operator = null;
    this.previousValue = null;
  }

  clear() {
    this.showValue = '0';
    this.currentValue = '';
    this.operator = null;
    this.previousValue = null;
  }

  memoryStore() {
    this.memory = parseFloat(this.showValue);
  }

  memoryRecall() {
    this.currentValue = this.memory.toString();
    this.showValue = this.currentValue;
  }

  memoryAdd() {
    this.memory += parseFloat(this.showValue);
  }

  memorySubtract() {
    this.memory -= parseFloat(this.showValue);
  }

  memoryClear() {
    this.memory = 0;
  }

  toggleDegRad() {
    this.isDegreeMode = !this.isDegreeMode;
  }

  toRadians(degrees: number) {
    return degrees * (Math.PI / 180);
  }

  toDegrees(radians: number) {
    return radians * (180 / Math.PI);
  }

  factorial(num: number): number {
    if (num <= 1) return 1;
    return num * this.factorial(num - 1);
  }

  toggleSign() {
    const value = parseFloat(this.currentValue || '0');
    this.currentValue = (-value).toString();
    this.showValue = this.currentValue;
  }  
}
