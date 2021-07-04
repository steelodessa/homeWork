"use strict";
function pyramid(row) {
  for (let i = 0; i < row; i++) {
    let star = "*";
    let space = " ";
    for (let j = 1; j <= i; j++) {
      star += "**";
    }
    let spaceLeft = space.repeat(row - i - 1);
    star = spaceLeft + star; //добавляем пробелы слева для центровки
    console.log(star);
  }
}
let row = +prompt("Введите количество ярусов", "");
pyramid(row);
