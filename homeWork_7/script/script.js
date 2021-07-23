let a = 2;
let b = 6;

//1
let result1 = a == 0 ? "Верно" : "Неверно";

//2
let result2 = a > 0 ? "Верно" : "Неверно";

//3
let result3 = a < 0 ? "Верно" : "Неверно";

//4
let result4 = a >= 0 ? "Верно" : "Неверно";

//5
let result5 = a <= 0 ? "Верно" : "Неверно";

//6
let result6 = a != 0 ? "Верно" : "Неверно";

//7
let result7 = a == "test" ? "Верно" : "Неверно";

//8
let result8 = a === "1" ? "Верно" : "Неверно";

//9
let result9 = a > 0 && a < 5 ? "Верно" : "Неверно";

//10
//let result10 = a == 0 || a == 2 ? (a += 7) : (a /= 10);
let resultNew_10;
if (a == 0 || a == 2) {
  console.log((resultNew10 = a += 7));
} else {
  console.log((resultNew10 = a /= 10));
}

//11
let result11;
if (a <= 1 && b >= 3) {
  result11 = +a + +b;
} else {
  result11 = a - b;
}

//12
let result12;
if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
  result12 = "Верно";
} else {
  result12 = "Неверно";
}

//13
let num = 3;
let result13;
switch (num) {
  case 1:
    result13 = "Зима";
    break;
  case 2:
    result13 = "Весна";
    break;
  case 3:
    result13 = "Лето";
    break;
  case 4:
    result13 = "Осень";
    break;

  default:
    result13 = "Введите число от 1 до 4";
    break;
}
