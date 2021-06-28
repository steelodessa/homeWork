"use strict";
const arr = [1, 2, 3, -1, -2, -3];
const array = [];

//const arr2 = [-1, -2, -3];
// console.log(array.length);

function positive(arr) {
  const exampleArr = [];
  if (arr.length) {
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] >= 0) {
        exampleArr.push(arr[i]);
      }
    }
  } else {
    return "error: Масив не должен быть пустым";
  }
  if (exampleArr.length > 0) {
    return exampleArr;
  } else {
    return null;
  }
}
console.log(positive(arr));

//Более короткий вариант
const arrTwo = [1, 2, 3, -1, -2, -3];
let positiveTwo = arrTwo.filter(function (a) {
  return a > 0;
});
console.log(positiveTwo);
