"use strict";

//Получаем все li в документе
let ulElement = document.getElementsByTagName("li");
//console.log(ulElement);

for (let i of ulElement) {
  console.log(i);
}

//Вывести общее кол-во элементов в консоль
console.log("Count <li>: " + ulElement.length);

//Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывести этот массив в консоль
function getArrayLi() {
  let arrLi = [];
  for (let i of ulElement) {
    arrLi.push(i.innerHTML);
  }
  console.log(arrLi);
}
getArrayLi();
