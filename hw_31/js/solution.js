"use strict";

//Получаем все li в документе
let liElement = document.getElementsByTagName("li");
//console.log(ulElement);

for (let i of liElement) {
  console.log(i);
}

//Вывести общее кол-во элементов в консоль
console.log("Count <li>: " + liElement.length);

//Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывести этот массив в консоль
function getArrayLi() {
  let arrLi = [];
  for (let i of liElement) {
    arrLi.push(i.innerHTML);
  }
  console.log(arrLi);
}
getArrayLi();
