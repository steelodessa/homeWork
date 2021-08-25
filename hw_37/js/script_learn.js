"use strict";

const DB_NAME = "saved_data";

let itemId = localStorage.itemId ? +localStorage.getItem("itemId") : 1;
const form = document.getElementById("todoForm");
const todoItems = document.getElementById("todoItems");

function findElement(elements, id) {
  return elements.find(function (element) {
    if (element.id === id) return element;
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  //получаем поля title и body
  const title = event.target.querySelector("input[name=title]");
  const description = event.target.querySelector("textarea[name=description]");

  //если хоть одно поле не заполнено обрываем выполнение
  if (!title.value || !description.value) {
    return;
  }

  //создаем и выводим task
  let template = createTemples(title.value, description.value, itemId);

  useStorage(title.value, description.value);

  event.target.reset();
});

document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage[DB_NAME]) return;

  let data = JSON.parse(localStorage[DB_NAME]);

  data.forEach(function (item) {
    const template = createTemples(
      item.heading,
      item.content,
      item.id,
      item.status
    );
  });
});

//Событие на изменение checkbox
todoItems.addEventListener("change", function (e) {
  const toDoItem = findWrapper(e.target);
  const toDoItemId = +toDoItem.getAttribute("data-id");
  const toDoItems = JSON.parse(localStorage[DB_NAME]);
  const status = e.target.checked;

  const currentToDoItem = findElement(toDoItems, toDoItemId);
  currentToDoItem.status = status;

  localStorage.setItem(DB_NAME, JSON.stringify(toDoItems));
});

//Удаление  задачи
todoItems.addEventListener("click", function (e) {
  if (!e.target.classList.contains("deleteOneTask")) return;

  const toDoItem = findWrapper(e.target);
  const toDoItemId = +toDoItem.getAttribute("data-id");
  const toDoItems = JSON.parse(localStorage.getItem(DB_NAME));
  //console.log(toDoItems);
  const storeData = toDoItems.filter(function (item) {
    if (item.id !== toDoItemId) return item;
  });
  localStorage.setItem(DB_NAME, JSON.stringify(storeData));

  toDoItem.parentElement.remove();
});

function findWrapper(elem) {
  elem.hasAttribute("data-id") ? elem : findWrapper(elem.parentElement);
}

//данные в хранилище
function useStorage(heading, content, status = false) {
  let toDoItem = {
    id: itemId,
    heading,
    content,
    status,
  };
  ++itemId;
  localStorage.setItem("itemId", itemId);

  //Если что то есть в хранилище, распарсим, добавим и заново установим. Если нет, то преобразуем в JSON и установим
  if (localStorage[DB_NAME]) {
    const storeData = JSON.parse(localStorage.getItem(DB_NAME));
    storeData.push(toDoItem);
    localStorage.setItem(DB_NAME, JSON.stringify(storeData));
    return toDoItem;
  }
  const arr = JSON.stringify([toDoItem]);
  localStorage.setItem(DB_NAME, arr);

  return toDoItem;
}

//Создаем шаблон задачи
function createTemples(title, description, id, status = false) {
  const mainWrp = document.createElement("div");
  mainWrp.className = "col-4 mainWrp";

  const taskWrp = document.createElement("div");
  taskWrp.className = "taskWrapper";
  taskWrp.setAttribute("data-id", id);

  const titleTask = document.createElement("div");
  titleTask.className = "taskHeading";
  titleTask.innerHTML = title;

  const descTask = document.createElement("div");
  descTask.className = "taskDescription";
  descTask.innerHTML = description;

  const label = document.createElement("label");
  label.className = "d-flex justify-content-between align-items-center";

  const completed = document.createElement("div");
  completed.innerHTML = "completed";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "completed";

  if (status) {
    checkbox.checked = true;
    checkbox.setAttribute("checked", "checked");
  }

  const deleteOneTask = document.createElement("button");
  deleteOneTask.className = "btn btn-danger w-100 deleteOneTask";
  deleteOneTask.innerHTML = "Delete task";

  todoItems.prepend(mainWrp);
  mainWrp.append(taskWrp);
  taskWrp.append(titleTask);
  taskWrp.append(descTask);
  taskWrp.append(label);
  label.append(completed);
  label.append(checkbox);
  taskWrp.append(deleteOneTask);
}

/*
let deleteAll = document.createElement("button");
deleteAll.className = "btn btn-danger w-100";
deleteAll.innerHTML = "Delete All Task";
form.after(deleteAll);
querySelector
*/
const delALL = document.getElementsByClassName("btn-danger");
console.log(delALL);
const mainWrapper = document.getElementsByClassName("mainWrp");

delALL.addEventListener("click", function () {
  for (let i = mainWrapper.length - 1; i >= 0; i--) {
    mainWrapper[i].remove();
  }
  localStorage.clear();
});
