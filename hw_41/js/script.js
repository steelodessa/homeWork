"use strict";

const container = document.querySelector(".list-group-numbered");

//Функция, которая делает первый символ заглавным
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function renderAlbumList() {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((respond) => respond.json())
    .then((data) => {
      for (let item of data) {
        let li = document.createElement("li");
        li.className = "list-group-item list-group-item-action";
        let a = document.createElement("a");
        a.setAttribute("href", "./photo.html");
        a.setAttribute("target", "_blank");
        a.setAttribute("id", `${item.id}`);
        a.innerText = ucFirst(`${item.title}`);
        container.append(li);
        li.append(a);
      }
    });
}

renderAlbumList();

container.addEventListener("click", (e) => {
  localStorage.setItem("id", e.target.id);
});
