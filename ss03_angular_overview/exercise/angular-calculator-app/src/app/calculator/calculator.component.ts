import {Component, OnInit} from '@angular/core';
import {Calculator} from '../calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calculator: Calculator = {
    firstOperand: 5,
    secondOperand: 2,
    operator: '-'
  };

  calculate() {
    switch (this.calculator.operator) {
      case '+':
        return Number(this.calculator.firstOperand) + Number(this.calculator.secondOperand);
      case '-':
        return this.calculator.firstOperand - this.calculator.secondOperand;
      case '*':
        return this.calculator.firstOperand * this.calculator.secondOperand;
      case '/':
        if (this.calculator.secondOperand === 0) {
          return 'Không thể chia cho 0';
        } else {
          return this.calculator.firstOperand / this.calculator.secondOperand;
        }
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
