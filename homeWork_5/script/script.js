//Task #1

let obj = {};
obj.name = "John";
obj.surname = "Smith";
//console.log(obj);
obj.name = "Pete";
//console.log(obj);
delete obj.name;
console.log(obj);

//Task #2
/* Можно изменять только свойства объекта, а не переменную,в которой находится объект
user.name = «Pete»; - работать будет*/

//Task #3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

//1 самый простой ))
let sumResult = salaries.John + salaries.Ann + salaries.Pete;
console.log(sumResult);

//2 динамический
let arr = Object.values(salaries); //получили массив arr и дальше перебрали
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

//3 динамический
let sumTwo = 0;
for (let key in salaries) {
  sumTwo += salaries[key];
}
console.log(sumTwo);
