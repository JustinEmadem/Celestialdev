import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})

export class CalculatorComponent {
  display = '0';
  history = '';
  previousOperand = '';
  currentOperand = '';
  operator = '';
  waitingForNewOperand = false;
  isDarkTheme = true;
  calculatorHistory: Array<{expression: string, result: string, timestamp: number}> = [];

  appendNumber(number: string) {
    if (this.waitingForNewOperand) {
      this.display = number;
      this.waitingForNewOperand = false;
    } else {
      this.display = this.display === '0' ? number : this.display + number;
    }
    this.currentOperand = this.display;
  }

  decimal() {
    if (this.waitingForNewOperand) {
      this.display = '0.';
      this.waitingForNewOperand = false;
    } else if (this.display.indexOf('.') === -1) {
      this.display += '.';
    }
    this.currentOperand = this.display;
  }

  clear() {
    this.display = '0';
    this.history = '';
    this.previousOperand = '';
    this.currentOperand = '';
    this.operator = '';
    this.waitingForNewOperand = false;
  }

  clearEntry() {
    this.display = '0';
    this.currentOperand = '';
  }

  backspace() {
    if (this.display.length > 1) {
      this.display = this.display.slice(0, -1);
    } else {
      this.display = '0';
    }
    this.currentOperand = this.display;
  }

  operation(nextOperator: string) {
    const inputValue = parseFloat(this.currentOperand);

    if (this.previousOperand === '') {
      this.previousOperand = inputValue.toString();
    } else if (this.operator) {
      const currentValue = this.previousOperand || '0';
      const newValue = this.performCalculation();

      this.display = newValue.toString();
      this.previousOperand = newValue.toString();
    }

    this.waitingForNewOperand = true;
    this.operator = nextOperator;
    this.history = `${this.previousOperand} ${this.getOperatorSymbol(nextOperator)}`;
  }

  calculate() {
    const inputValue = parseFloat(this.currentOperand);

    if (this.previousOperand !== '' && this.operator) {
      const newValue = this.performCalculation();
      const expression = `${this.previousOperand} ${this.getOperatorSymbol(this.operator)} ${this.currentOperand}`;
      
      // Add to history
      this.calculatorHistory.unshift({
        expression,
        result: newValue.toString(),
        timestamp: Date.now()
      });

      // Keep only last 20 calculations
      if (this.calculatorHistory.length > 20) {
        this.calculatorHistory = this.calculatorHistory.slice(0, 20);
      }

      this.display = newValue.toString();
      this.history = '';
      this.previousOperand = '';
      this.currentOperand = '';
      this.operator = '';
      this.waitingForNewOperand = true;
    }
  }

  private performCalculation(): number {
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    switch (this.operator) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '*':
        return prev * current;
      case '/':
        return current !== 0 ? prev / current : 0;
      default:
        return current;
    }
  }

  private getOperatorSymbol(operator: string): string {
    switch (operator) {
      case '+': return '+';
      case '-': return '−';
      case '*': return '×';
      case '/': return '÷';
      default: return operator;
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    // Theme switching logic would go here
  }

  useHistoryItem(item: {expression: string, result: string}) {
    this.display = item.result;
    this.currentOperand = item.result;
    this.waitingForNewOperand = true;
  }

  clearHistory() {
    this.calculatorHistory = [];
  }

  trackByFn(index: number, item: any): number {
    return item.timestamp;
  }
}
