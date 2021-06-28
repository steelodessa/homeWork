"use strict";
let num = +prompt("Введите число", "");
let pow = +prompt("Введите степень", "");

//Функция проверки числа
function isCorrectNumber(value) {
  if (
    isNaN(value) ||
    value === null ||
    value === "" ||
    typeof value === "string"
  ) {
    return false;
  } else {
    return true;
  }
}
//Возведение в степень
function getPow(num, pow = 1) {
  if (isCorrectNumber(num) && isCorrectNumber(pow)) {
    return num ** pow;
    //return Math.pow(num, pow);
  } else {
    return "error: Вы ввели неправильные данные";
  }
}
alert(getPow(num, pow));
