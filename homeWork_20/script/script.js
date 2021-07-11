"use strict";

//1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
let arrOne = [1, 2, 3];
let arrTwo = [4, 5, 6];
let result = arrOne.concat(arrTwo);
console.log(result);

//2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
arrOne.reverse();
console.log(arrOne);

//3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
arrOne = [1, 2, 3];
arrOne.push(4, 5, 6);
console.log(arrOne);

//4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
arrOne = [1, 2, 3];
arrOne.unshift(4, 5, 6);
console.log(arrOne);

//5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
arrOne = ["js", "css", "jq"];
console.log(arrOne.shift());

//6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
arrOne = ["js", "css", "jq"];
console.log(arrOne.pop());

//7. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].
arrOne = [1, 2, 3, 4, 5];
result = arrOne.slice(0, 3);
console.log(result);

//8. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].
arrOne = [1, 2, 3, 4, 5];
result = arrOne.slice(-2);
console.log(result);

//9. Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].
arrOne = [1, 2, 3, 4, 5];
arrOne.splice(1, 2);
console.log(arrOne);

//10. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].
arrOne = [1, 2, 3, 4, 5];
result = arrOne.splice(1, 3);
console.log(result);

//11. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
arrOne = [1, 2, 3, 4, 5];
arrOne.splice(3, 0, "a", "b", "c");
console.log(arrOne);

//12. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
arrOne = [1, 2, 3, 4, 5];
arrOne.splice(1, 0, "a", "b");
arrOne.splice(6, 0, "c");
//здесь мог быть и splice(8, 0, 'e'), но быстрее push
arrOne.push("e");
console.log(arrOne);

//13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
arrOne = [3, 4, 1, 2, 7];
arrOne.sort();
console.log(arrOne);

//14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.
arrOne = [1, 2, 3, 4, 5];

//Через reduce
let sumReduce = arrOne.reduce(function (a, b) {
  return a + b;
});
console.log(sumReduce);

//Через forEach
function arrSum(array) {
  let sum = 0;
  array.forEach(function (item, index, array) {
    sum += item;
  });
  return sum;
}
console.log(arrSum(arrOne));

//Через for
function arrSum2(array) {
  let sum = 0;
  for (let i = 0; i < arrOne.length; i++) {
    sum += arrOne[i];
  }
  return sum;
}
console.log(arrSum2(arrOne));

//15. Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.
arrOne = [5, 6, 7, 8, 9];
result = [];

//1 способ
function pow(element) {
  return element ** 2;
}

function getNewArr(array, callback) {
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

let res = getNewArr(arrOne, pow);
console.log(res);

//2 способ
let getNewArr2 = Array.from(arrOne, function (a, b) {
  return a ** 2;
});
console.log(getNewArr2);

//3 способ
arrOne = [5, 6, 7, 8, 9];
function getNewArrTwo(array) {
  let sum = [];
  array.forEach(function (item, index, array) {
    sum[index] = item ** 2;
  });
  return sum;
}
console.log(getNewArrTwo(arrOne));

//16. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.
arrOne = [1, -3, 5, 6, -7, 8, 9, -11];
function isNegative(item) {
  if (item < 0) {
    return true;
  }
  return false;
}
let negativeNumbers = arrOne.filter(isNegative);
console.log(negativeNumbers);

//17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.
arrOne = [1, -3, 5, 6, -7, 8, 9, -11];
function isOdd(item) {
  if (item % 2 === 0) {
    return true;
  }
  return false;
}
let oddNumbers = arrOne.filter(isOdd);
console.log(oddNumbers);

//18. Дан массив со строками ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']. Оставьте в нем только те строки, длина которых больше 5-ти символов.
let wordArr = ["aaa", "aaaqqq", "zzzqq", "zz", "qsaa", "q", "az"];
let resultWordArr = wordArr.filter(function (word) {
  return word.length > 5;
});
console.log(resultWordArr);

//19. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
arrOne = [1, 2, [3, 4], 5, [6, 7]];
let newArrOne = arrOne.filter(function (a) {
  if (Array.isArray(a)) return a;
});
console.log(newArrOne);

//20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.
arrOne = [5, -3, 6, -5, 0, -7, 8, 9];
let negativeCountNumbers = arrOne.filter(function (a) {
  return a < 0;
});
console.log(negativeCountNumbers.length);
