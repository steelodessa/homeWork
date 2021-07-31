"use strict";
/*
Оператор «spread»
Если мы хотим получить и последующие значения массива, но не уверены в их числе – можно добавить ещё один параметр, который получит «всё остальное», при помощи оператора "..." («spread», троеточие):
let [firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");

alert(firstName); // Юлий
alert(lastName);  // Цезарь
alert(rest);      // Император,Рима (массив из 2х элементов)

Значением rest будет массив из оставшихся элементов массива. Вместо rest можно использовать и другое имя переменной, оператор здесь – троеточие. Оно должно стоять только последним элементом в списке слева.

Функция bind должна возвращать новую функцию, которую вызываем после метода bind(). Суть такова, что берем какой то метод и вызываем его в контексте объекта
context - это объект
rest это те параметры которые передаем в функцию bind
*/

//Объект для тестирования
const person = {
  name: "Aleks",
};

function info(phone, email) {
  console.log(`Имя: ${this.name}, Тел: ${phone}, Email: ${email}`);
}
console.log("---------1 вариант---------");
//1 вариант
function myBindOne(fn, context, ...rest) {
  return function (...args) {
    //return fn.apply(context, rest.concat(args));
    return fn.call(context, ...rest.concat(args)); //разворачиваем массив с помощью ...
  };
}
myBindOne(info, person)("123", "www@gmail.com");
myBindOne(info, person, "1234")("www@gmail.com");
myBindOne(info, person, "12345", "www@gmail.com")();

console.log("---------2 вариант---------");
//2 Вариант без встроенных методов
function myBindTwo(fn, context, ...rest) {
  return function (...args) {
    const uniq = Date.now().toString(); //формируем уникальный ключ через дату в мсек и каждый вызов он будет уникальный так как зависит от времени
    context[uniq] = fn; //создаем ключ и в качестве значения передаем функцию fn, без вызова

    const result = context[uniq](...rest.concat(args)); //передаем параметры, которые передали в функцию myBind. Вызываем функцию и если она что то возвращает то заносим результат в result
    delete context[uniq]; //удаляем ключ из объекта
    return result;
  };
}
myBindTwo(info, person)("123", "www@gmail.com"); //здесь rest нет
myBindTwo(info, person, "1234")("www@gmail.com"); //rest это "12345"
myBindTwo(info, person, "12345", "www@gmail.com")(); //rest это "12345", "www@gmail.com"

console.log("---------3 вариант---------");
//3 метод, используя call
function myBindThree(fn, context) {
  const rest = Array.prototype.slice.call(arguments, 2); //массив, который будет соединять в себе разные параметры, аналог ...rest
  return function () {
    const args = Array.prototype.slice.call(arguments); //
    return fn.apply(context, rest.concat(args)); //используем apply, так как передаем массивы. Через concat соединяем наши массивы
  };
}
myBindThree(info, person)("123", "www@gmail.com");
myBindThree(info, person, "1234")("www@gmail.com");
myBindThree(info, person, "12345", "www@gmail.com")();

console.log("---------4 вариант---------");
//Реализация через заглушку function Person и const objPerson

function Person() {
  console.log(`Сотрудник ${this.name}`);
}

const objPerson = {
  name: "Вася",
  age: 20,
  job: "Manager",
};

//Функция myBindFour
function myBindFour(fn = Person, context = objPerson) {
  return function (...args) {
    fn.apply(context, args);
  };
}

function personsOffice() {
  console.log(`Сотрудник ${this.name}, ${this.age}, ${this.job}`);
}

const personOne = {
  name: "Петя",
  age: 20,
  job: "Manager 2",
};

const personTwo = {
  name: "Юрий",
  age: 30,
  job: "Manag 3",
};

// проверка
myBindFour()();
myBindFour(personsOffice, personOne)();
myBindFour(personsOffice, personTwo)();

console.log("---------CALL---------");
//Для себя. Собственная функция call
function myCall(fn, context, ...args) {
  const uniq = Date.now().toString(); //также создаем уникальный id
  context[uniq] = fn;
  const result = context[uniq](...args); //
  delete context[uniq];
  return result;
}
myCall(info, person, "1234", "test@gmail.com");

console.log("---------APPLY---------");
//Для себя Собственная функция apply. Тот же самый call, только по другому происходит передача параметров. Так как apply принимает массив, то ... не используем

function myApply(fn, context, args) {
  const uniq = Date.now().toString(); //также создаем уникальный id
  context[uniq] = fn;
  const result = context[uniq](...args); //
  delete context[uniq];
  return result;
}
myApply(info, person, ["123456", "test@gmail.com"]);
