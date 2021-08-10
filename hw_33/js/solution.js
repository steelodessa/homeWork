"use strict";
//Task 1
let arrayLi = [
  1,
  2,
  3,
  4,
  [1.1, 1.2, 1.3],
  5,
  6,
  7,
  [1.4, 1.5, [2.1, 2.2, [3.1, [4.1, 4.2, [5.1, 5.2, [6.1, 6.2]]], 3.3]]],
];

function generateList(array) {
  let ul = document.createElement("ul");
  for (let i = 0; i < array.length; i++) {
    let li = document.createElement("li");
    li.textContent = array[i];
    if (Array.isArray(array[i])) {
      li.textContent = "";
      li.append(generateList(array[i]));
    }
    ul.append(li);
  }
  document.body.append(ul);
  return ul;
}
generateList(arrayLi);

//Task 2
const arr = [
  {
    firstName: "Vlad",
    lastname: "Shaitan",
    age: 38,
    gender: "cat",
  },
  {
    firstName: "Alex",
    lastname: "Puluev",
    age: 10,
    gender: "female",
  },
  {
    firstName: "Ivan",
    lastname: "Peanuts",
    age: 10,
    gender: "male",
  },
  {
    firstName: "Ann",
    lastname: "Shaitan",
    age: 38,
    gender: "dog",
  },
];

const input = document.querySelector("#search");

input.addEventListener("keyup", (e) => {
  let result = [];
  arr.forEach((item) => {
    for (let key in item) {
      if (item[key].toString().indexOf(e.target.value) !== -1) {
        result.push(item);
        break;
      }
    }
  }),
    console.log(result);
  if (result.length > 0) {
    generate(result);
  }
});

//Для себя, не доделал, если что
function generate(array) {
  let ul = document.createElement("ul");
  for (let i = 0; i < array.length; i++) {
    let li = document.createElement("li");
    let arr = Object.values(array[i]);
    //console.log(arr);
    li.textContent = `
    First Name: ${arr[0]},
    Last Name: ${arr[1]},
    Age: ${arr[2]},
    Gender: ${arr[3]}
    `;
    ul.append(li);
  }
  document.body.append(ul);
  return ul;
}
