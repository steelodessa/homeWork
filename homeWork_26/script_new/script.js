"use strict";

function getRandom() {
  let arrNumbers = []; //массив для хранения сгенерированных чисел

  return function foo() {
    let num = Math.floor(Math.random() * 100 + 1);
    //console.log("num = " + num);
    //Проверяем, если значение переменной num есть в массиве arrNumbers, то делаем рекурсию, еще раз вызывая foo() и генерируем новое значение num. Если значения нет, через push добавляем в массив и выводим в консоль значение num
    return (
      arrNumbers.includes(num) ? foo() : arrNumbers.push(num), console.log(num)
    );
  };
}

let getRandomNum = getRandom();

getRandomNum();
getRandomNum();
