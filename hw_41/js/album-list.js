"use strict";

const row = document.querySelector(".row");
let id = localStorage.getItem("id");

function albumList() {
  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    .then((respond) => respond.json())
    .then((data) => {
      for (let item of data) {
        const div = document.createElement("div");
        div.className = "card mt-2 mx-2";

        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = item.url;

        const divCard = document.createElement("div");
        divCard.className = "card-body";

        const p = document.createElement("p");
        p.className = "card-text";
        p.innerHTML = item.title;

        div.append(img);
        div.append(divCard);
        divCard.append(p);

        row.append(div);
      }
    });
}

albumList();
