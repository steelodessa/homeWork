"use strict";

function mainFunction(callback) {
  let a = +prompt("Введите число");
  let b = +prompt("введите степень");
  callback(a, b);
}

function exponentiation(x, y) {
  let result = x ** y;
  alert(result);
}

function multiplay(x, y) {
  let result = x * y;
  alert(result);
}

function division(x, y) {
  let result = x / y;
  alert(result);
}

function modulo(x, y) {
  let result = x % y;
  alert(result);
}

mainFunction(exponentiation);
