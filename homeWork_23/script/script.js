"use strict";
//Task #1 Реализовать рекурсивную функцию которая находит факториал переданного в нее числа getFactorial(3) // в данном случае должна вернуть факториал числа 3! = 3 * 2 * 1

function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(5));

//Используя тернарный оператор
function factorialTwo(num) {
  return num === 1 ? 1 : num * factorial(num - 1);
}
console.log(factorialTwo(6));

//Task #2 Реализовать рекурсивную функцию которая находит возводит число в степень. Число которое нужно возвести в степень передается как первый аргумент в функцию Степень передается как второй аргумент в функцию pow(num, degree).

//Добавляем базовые случаи, когда число в 1 степени = числу, число в 0 степени = 1
function pow(num, degree) {
  if (degree === 1) {
    return num;
  } else if (degree === 0) {
    return 1;
  } else {
    return num * pow(num, degree - 1);
  }
}
console.log(pow(2, 0));

//Task #3 Рекурсивное суммирование Задача: напишите рекурсивную функцию для вычисления суммы заданных положительных целых чисел a и b без прямого использования оператора +. Необходимо инкрементировать одно число на единицу до тех пор, пока другое число не окажется равным нулю.

//Сколько отнимаем от b столько же добавляем к а, т.е. при b - 1, a + 1
function sum(a, b) {
  return b === 0 ? a : sum(a + 2, b - 2);
}
console.log(sum(5, 4));