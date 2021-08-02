"use strict";

//Выведет каждый элемент списка в консоль. Используйте цикл for..of
let liElement = document.querySelectorAll("li");
//console.log(allChilds);

for (let i of liElement) {
  console.log(i);
}
//-----------------------------------------------------------------
//Вывести общее кол-во элементов в консоль
console.log("Count <li>: " + liElement.length);

//-----------------------------------------------------------------
//Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывести этот массив в консоль
let arrLi = [];
for (let i of liElement) {
  arrLi.push(i.innerHTML);
}
console.log(arrLi);

//-----------------------------------------------------------------
//Вытянуть текст из тегов li - Как вариант через data
let arr = [];
for (let i of liElement) {
  arr.push(i.firstChild.data);
}
console.log(arr);

//-----------------------------------------------------------------
//Вытянуть все аттрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого аттрибута в массив — вывсести этот массив в консоль. Так-же записать в отдельный массив каждое имя аттрибута — вывести массив в консоль
let ulElement = document.querySelector("ul");
let valueAttrArray = []; //значение в атрибутах
let nameAttrArray = []; //имя атрибута
console.log(ulElement);
for (let i of ulElement.attributes) {
  valueAttrArray.push(i.value);
  nameAttrArray.push(i.name);
}
console.log(valueAttrArray); //массив со значениями
console.log(nameAttrArray); //массив с name

//-----------------------------------------------------------------
//С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
ulElement.lastElementChild.innerHTML = "Привет меня зовут Alex";

//ulElement.lastElementChild.textContent = "Привет меня зовут Aleksandr";

//2 вариант
let lastElement = document.querySelector("li:last-child");
lastElement.innerHTML = "Привет меня зовут Aleks";

//-----------------------------------------------------------------
//Добавить первому элементу li аттрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
ulElement.firstElementChild.setAttribute("data-my-name", "Alex");

//2 вариант
let firstElement = document.querySelector("li:first-child");
firstElement.setAttribute("data-my-name", "Alex2");

//-----------------------------------------------------------------
//Удалить у тега ul аттрибут ‘data-dog-tail‘
ulElement.removeAttribute("data-dog-tail");

/**
 -----------------------------------------------------------------
 2. Написать функцию generateList(array), которая принимает массив из чисел и массивов чисел (например [1,2,3]) и генерирует список из елементов:
 */
let numbersArray = [1, 2, [1.1, 1.2, 1.3], 3];

//1 вариант
function generateList(array) {
  let ul = document.createElement("ul"); //создаем <ul>
  //console.log($ul);

  for (let i = 0; i < array.length; i++) {
    let li = document.createElement("li"); //создаем тег <li>

    li.textContent = array[i]; // Добавляем число в <li> из массива

    if (Array.isArray(array[i])) {
      li.textContent = "";
      li.append(generateList(array[i])); //если получаем массив, то добавляем пустую строку и делаем рекурсию, создавая новый <ul>
    }

    ul.append(li); //добавляем <li> в <ul>
  }
  document.body.append(ul); //размещаем <ul> на странице
  return ul;
}
generateList(numbersArray);

/*
2 вариант. Через циклы, попробовать подход php

function generateListTwo(array) {
  let ulBlock = "<ul>";
  let count = array.length;
  for (let i = 0; i < count; ++i) {
    if (Array.isArray(array[i])) {
      ulBlock += "<li><ul>";
      for (let j = 0; j < array[i].length; ++j) {
        ulBlock += `<li>${array[i][j]}</li>`;
      }
      ulBlock += "</ul></li>";
    } else ulBlock += `<li>${array[i]}</li>`;
  }
  ulBlock += "</ul>";
  document.body.innerHTML = ulBlock;
}

generateListTwo(numbersArray);
*/
//-----------------------------------------------------------------
//3. Написать функцию, которая выводит таблицу 10 × 10, заполненную числами от 1 до 100
function createTable3(row = 10, col = 10) {
  let c = 1;
  for (let i = 0; i < row; i++) {
    let tr = document.createElement("tr");
    document.body.append(tr);
    for (let j = 0; j < col; j++) {
      let td = document.createElement("td");
      td.style.padding = "10px";
      td.style.border = "1px solid black";
      td.style.textAlign = "center";
      td.innerHTML = c;
      tr.append(td);
      c++;
    }
  }
}

createTable3(6, 6);
