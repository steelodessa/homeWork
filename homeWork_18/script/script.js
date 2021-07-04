"use strict";

/*
let age = +prompt("Сколько вам лет?", "");
if (isNaN(age)) {
  alert("Должно быть число");
} else {
  if (
    (age % 100 >= 11 && age % 100 <= 14) ||
    (age % 10 >= 5 && age % 10 <= 9) ||
    age % 10 == 0
  ) {
    alert(`Вам ${age} лет`);
  } else if (age % 10 == 1) {
    alert(`Вам ${age} год`);
  } else if (age % 10 >= 2 && age % 10 <= 4) {
    alert(`Вам ${age} года`);
  }
}
*/

//вариант через switch, почти универсальный
function getUnitCase(value, strOne, strTwo, strThree) {
  if (value % 100 >= 11 && value % 100 <= 19) {
    return strThree;
  } else {
    switch (value % 10) {
      case 1:
        return strOne;
      case 2:
      case 3:
      case 4:
        return strTwo;
      default:
        return strThree;
    }
  }
}

let age = +prompt("Сколько вам лет?", "");
if (isNaN(age)) {
  alert("Должно быть число");
} else {
  //console.log(getCurr(value, "рубль", "рубля", "рублей"));
  let ageStr = getUnitCase(age, "год", "года", "лет");
  alert(`Вам ${age} ${ageStr}`);
}
