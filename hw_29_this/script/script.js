"use strict";

//Проверяем, что введено число
function validator(value) {
  let result = prompt(value);
  while (isNaN(result)) {
    alert(`Введённое значение ${result} не является числом!`);
    result = prompt(value);
  }
  return result;
}

let calculator = {
  read: function () {
    this.firstNumber = +validator("Введите первое значение:", "");
    this.secondNumber = +validator("Введите второе значение:", "");
  },
  sum: function () {
    return this.firstNumber + this.secondNumber;
  },
  mul: function () {
    return this.firstNumber * this.secondNumber;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

/*
Как вариант, проверка через цикл do while, пока не будет введено число, показывать поле ввода

let calculatorTwo = {
  read: function () {
    do {
      this.firstNumber = +prompt("Введите первое значение:", 0);
    } while (isNaN(this.firstNumber) || this.firstNumber == null);
    do {
      this.secondNumber = +prompt("Введите второе значение:", 0);
    } while (isNaN(this.secondNumber) || this.secondNumber == null);
  },
  sum: function () {
    return this.firstNumber + this.secondNumber;
  },
  mul: function () {
    return this.firstNumber * this.secondNumber;
  },
};

calculatorTwo.read();
alert(calculator.sum());
alert(calculator.mul());
*/
