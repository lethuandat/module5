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

  calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
      case '+':
        return Number(firstOperand) + Number(secondOperand);
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
