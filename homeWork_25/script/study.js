function createCounter() {
  let counter = 0; //переменная которую хотим замкнуть в области видимости
  const myFunction = function () {
    counter = counter + 1;
    return counter;
  };
  return myFunction;
}
const increment = createCounter();
const c1 = increment(); //1
const c2 = increment(); //2
const c3 = increment(); //3
console.log("example increment", c1, c2, c3);

//Приемр замыкания 1
function cretaeCalcFunction(n) {
  return function () {
    console.log(1000 * n);
  };
}
//При обычном вызове cretaeCalcFunction(42) в консоль ничего не выведется, так как cretaeCalcFunction возвращает функцию. Поэтому занесем cretaeCalcFunction в отдельную переменнную calc. Теперь calc является функция, которую получает из другой функции cretaeCalcFunction
const calc = cretaeCalcFunction(42);
console.log(calc); //убедимся что в calc функция, возвращаемая 1000*n
calc(); //вызываем calc без параметров и получаем 42000. При вызове функции cretaeCalcFunction(42), функция отработали и вернула новую функцию, и т.к. данная функция была вызвана в контексте функции cretaeCalcFunction, переменная n замкнута в той функции которую мы возвращаем

//Пример замыкания 2
function createIncrementor(n) {
  return function (num) {
    return n + num;
  };
}
const addOne = createIncrementor(1); //переменную n замкнем на 1
console.log(addOne(10)); //11
console.log(addOne(40)); //41

//Пример замыкания 3
function urlGeneration(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}
const comUrl = urlGeneration("com");
const ruUrl = urlGeneration("ru");
console.log(comUrl("google"));
console.log(comUrl("netflix"));

console.log(comUrl("ya"));
console.log(comUrl("vk"));

//Пример замыкания 4

//Создаем обычную функцию
let a = 0;
function one() {
  a += 1;
  return a;
}
console.log(one()); //1
console.log(one()); //2

console.log("---------");

//обернем one в другую -> two.
//Внутри функции создаем переменная которую хотим замкнуть в области видимости. Создаем функцию, которая к этой переменной обращается. Причем, ее невозможно изменить кроме внутренней function one(). Дальше, один раз вызываем через созданную новую переменную
function two() {
  let b = 0;
  return function one() {
    b += 1;
    return b;
  };
}
//В момент вызова two() в js создается блок видимости в которой доступна function one(), которой доступны переменные function two()
const c = two(); //в переменную с попадет функция function one()
console.log(c);
console.log(c()); // по сути происходит выполнение function one() //1
console.log(c()); //2
const d = two(); //Для переменной d создается свой блок видимости в которой тоже будет переменная b и функция one
console.log(d()); //1
console.log(d()); //2
