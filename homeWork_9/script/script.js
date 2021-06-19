/*
//1
let x = 10;
let y = 7;
let result = x > y ? "x больше, чем y" : "x не больше, чем y";
alert(result);

//2
let num = +prompt("Введите число", "");
if (num % 2 == 0) {
  alert("Число " + num + " четное");
} else {
  alert("Число " + num + " нечетное");
}
//num % 2 == 0 ? console.log(`Число ${num} - четное`) : console.log(`Число ${num} - нечетное`);

//3
let numb = +prompt("Введите целое число", "");
let amountNumber;
let status;
if (numb >= 0) {
  amountNumber = String(numb).length;
  status = " положительное";
} else if (numb < 0) {
  amountNumber = String(Math.abs(numb)).length;
  status = " отрицательное";
}
switch (amountNumber) {
  case 1:
    alert("Число " + numb + " однозначное," + status);
    break;
  case 2:
    alert("Число " + numb + " двухзначное," + status);
    break;
  default:
    alert("Число " + numb + status + "," + " трехзначное и более");
    break;
}

//4 
let numOne = +prompt("Введите первое число", "");
let numTwo = +prompt("Введите второе число", "");
let numThree = +prompt("Введите третье число", "");

//Вариант 1
if (numOne > numTwo && numOne > numThree) {
  alert("Наибольшее введенное число " + numOne);
} else if (numTwo > numOne && numTwo > numThree) {
  alert("Наибольшее введенное число " + numTwo);
} else {
  alert("Наибольшее введенное число " + numThree);
}

//Вариант 2
if (numTwo > numOne) numOne = numTwo;
if (numThree > numOne) numOne = numThree;
alert("Наибольшее введенное число " + numOne);


//5
let sideOne = +prompt("Введите первое число", "");
let sideTwo = +prompt("Введите второе число", "");
let sideThree = +prompt("Введите третье число", "");
if (
  sideOne + sideTwo > sideThree &&
  sideTwo + sideThree > sideOne &&
  sideOne + sideThree > sideTwo
) {
  alert("Треугольник существует");
} else {
  alert("Построение треугольника невозможно");
}
*/
