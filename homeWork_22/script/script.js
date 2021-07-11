"use strict";
//Создаем общий массив для всех методов, в котором идет проверка
let arr = [5, 7, 2, 4, 5, 6, 7];

//Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
function myIndexOf(arr, element) {
  let count = arr.length;
  for (let i = 0; i < count; i++) {
    if (arr[i] === element) return i;
  }
  return -1;
}
console.log(myIndexOf(arr, 4)); // индекс 3
//Проверяем
console.log(arr.indexOf(4)); //индекс 3

//Метод lastIndexOf() возвращает индекс последнего вхождения указанного значения в строковый объект String, на котором он был вызван, или -1, если ничего не было найдено. Поиск по строке ведётся от конца к началу, начиная с индекса fromIndex.
function myLastIndexOf(arr, element) {
  let count = arr.length;
  for (let i = count; i >= 0; i--) {
    if (arr[i] === element) return i;
  }
  return -1;
}
console.log(myLastIndexOf(arr, 7)); //индекс 6
//Проверяем
console.log(arr.lastIndexOf(7)); //индекс 6

//Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции. В противном случае возвращается undefined.
let fooOne = function (value) {
  return value > 6;
};
function newFind(arr, foo) {
  let count = arr.length;
  for (let i = 0; i < count; i++) {
    if (foo(arr[i])) return arr[i];
  }
}
console.log(newFind(arr, fooOne)); // 7
//Проверяем
console.log(arr.find(fooOne)); // 7

//Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.
let fooTwo = function (value) {
  return value > 6;
};
function myFindIndex(arr, cb) {
  let count = arr.length;
  for (let i = 0; i < count; i++) {
    if (cb(arr[i])) return i;
  }
  return -1;
}
console.log(myFindIndex(arr, fooTwo)); //1
//Проверяем
console.log(arr.findIndex(fooTwo)); //1

//Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
function myIncludes(arr, element) {
  let count = arr.length;
  for (let i = 0; i < count; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
}
console.log(myIncludes(arr, 4)); // true
//Проверяем
console.log(arr.includes(4)); // true

//Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
let fooThree = function (value) {
  return value > 2;
};
//Функция newEvery принимает проверяемый массив и функцию. Через цикл for проходимся по всему массиву и, если любое из переданных значение в функцию foo() не будет true, то вернется false, в противном случае все значения соответствуют условию foo
function myEvery(arr, foo) {
  let count = arr.length;
  for (let i = 0; i < count; i++) {
    if (!foo(arr[i])) return false;
  }
  return true;
}
console.log(myEvery(arr, fooThree)); // false
//Проверяем
console.log(arr.every(fooThree)); // false

//Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
let fooFour = function (value) {
  return value > 5;
};
//Функция newSome принимает проверяемый массив и функцию. Через цикл for проходимся по всему массиву и, если одно из переданных значений в функцию foo() будет true, то newSome вернет true, в противном случаем false
function mySome(arr, foo) {
  let count = arr.length;
  for (let i = 0; i < count; i++) {
    if (foo(arr[i])) return true;
  }
  return false;
}
console.log(mySome(arr, fooFour)); // true
//Проверяем
console.log(arr.some(fooFour)); // true
