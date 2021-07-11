"use strict";
//----------Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.
let arr = []; //создали массив
arr.push("a"); //добавляем элементы
arr.push("b");
arr.push("c");
arr.push("d");
function strArr() {
  return `${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`;
}
console.log(strArr(arr));

//----------Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной

//1 способ
let arrTwo = [2, 5, 3, 9]; //Создали массив с элементами
function foo(arr) {
  let result = arr[0] * arr[1] + arr[2] * arr[3];
  return result;
}
console.log(foo(arrTwo));

//2 способ при помощи методов
function foo2(arr) {
  let valueOne = arr.shift(); //Получаем первое значение 2, удаляя из массива
  let valueTwo = arr.splice(0, 1).join(); //Значение 5 из нового массива
  let valueThree = arr.splice(1, 1).join(); //Значение 3 из нового массива
  let valueFour = arr.pop(); //Последнее значение из нового массива
  let result = valueOne * valueTwo + valueThree * valueFour;
  return result;
}
console.log(foo2(arrTwo));

//---------Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//1 способ - простой
function getNumArr(arr) {
  return arr[1][0];
}
console.log(getNumArr(arr));

//2 способ. Если не знаем где эта цифра стоит
function getNumArr2(arr) {
  let newArr = arr.flat();
  newArr.forEach(function (item, index, array) {
    if (item === 4) console.log(`Число ${item} под индексом ${index}`);
  });
}
getNumArr2(arr);

//3 способ через методы
function getNumArr3(arr) {
  let newArr = arr.flat();
  if (newArr.includes(4)) console.log(4);
}
getNumArr3(arr);

//----------Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.
let obj = {
  js: ["jQuery", "Angular"],
  php: "hello",
  css: "world",
};
function objFunc() {
  console.log(obj["js"][0]);
  //console.log(obj.js[0]);
}
objFunc();

//----------Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.
//Делаем функцию с 2 аргументами: 1 - это строка, 2 - длина массива
function addString(str, lgth) {
  let arr = [];
  for (let i = 0; i < lgth; i++) {
    arr.push(str);
    str = str + "x";
  }
  return arr;
}
console.log(addString("x", 5));

//----------Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.
//Функция с одним аргументом - длина массива
function addNumberr(lgth) {
  let arr = [];
  for (let i = 1; i <= lgth; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
      str += i;
    }
    arr.push(str);
  }
  return arr;
}
console.log(addNumberr(4));

//----------Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве. Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].

function arrayFill(num, lgth) {
  let arr = [];
  for (let i = 0; i < lgth; i++) {
    arr.push(num);
  }
  return arr;
}
console.log(arrayFill("x", 5));

//----------Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
arr = [1, 1, 2, 4, 5, 4];
//1 способ через for
function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > 10) return i + 1; //+1 потому что отсчет идет с 0
  }
}
console.log(getSum(arr));

//2 способ через reduce
function getSum2(arr) {
  let counter = 1;
  let res = arr.reduce(function (sum, value) {
    if (sum > 10) {
      console.log(counter);
      return;
    } else {
      counter++;
      return sum + value;
    }
  });
}
getSum2(arr);

//----------Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
let arrNumbers = [1, 2, 3, 4, 5];

//1 способ через for
function newReverse(arr) {
  let lgth = arr.length;
  // Меняем местами первый с последним, второй и предпоследний и тд
  for (let i = 0; i < lgth / 2; i++) {
    [arr[i], arr[lgth - i - 1]] = [arr[lgth - i - 1], arr[i]];
  }
  return arr;
}
console.log(newReverse(arrNumbers));

//2 способ в цикле берем последний элемент и добавляем через push в новый
function newReverse2(arr) {
  let lgth = arr.length - 1;
  let newArrOne = [];
  for (let i = lgth; i >= 0; i--) {
    newArrOne.push(arr[i]);
  }
  return arr;
}
console.log(newReverse2(arrNumbers));

//----------Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

//1 способ flat+reduce
arr = [[1, 2, 3], [4, 5], [6]];
function sumArrTwo(arr) {
  let newArr = arr.flat();
  let sumReduce = newArr.reduce(function (a, b) {
    return a + b;
  });
  return sumReduce;
}
console.log(sumArrTwo(arr));

//2 способ flat+for
arr = [[1, 2, 3], [4, 5], [6]];
function sumArrOne(arr) {
  let newArr = arr.flat();
  let sum = 0;

  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  return sum;
}
console.log(sumArrOne(arr));

//3 способ for+for
arr = [[1, 2, 3], [4, 5], [6]];
function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}
console.log(sumArr(arr));

//----------Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

//1 способ 3for
function sumArrNew(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        sum += arr[i][j][k];
      }
    }
  }
  return sum;
}

console.log(sumArrNew(arr));

//2 способ flat+2for
function sumArrTwo(arr) {
  let newArr = arr.flat(2);
  let sum = 0;
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  return sum;
}
console.log(sumArrTwo(arr));
