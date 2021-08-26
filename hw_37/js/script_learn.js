"use strict";

const DB_NAME = "saved_data";

//ID для <div> одной задачи.
let itemId = localStorage.itemId ? +localStorage.getItem("itemId") : 1;
const form = document.getElementById("todoForm");
const todoItems = document.getElementById("todoItems");
const delALL = document.getElementById("deleteAll");

function findElement(elements, id) {
  return elements.find(function (element) {
    if (element.id === id) return element;
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //получаем поля title и body
  const title = event.target.querySelector("input[name=title]");
  const description = event.target.querySelector("textarea[name=description]");

  //если хоть одно поле не заполнено обрываем выполнение
  if (!title.value || !description.value) {
    return;
  }

  //создаем и выводим task
  createTemples(title.value, description.value, itemId);

  useStorage(title.value, description.value);

  event.target.reset();
});

//Событие происходит когда весь HTML загружен. Чтобы при обновлении ничего не пропадало
document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage[DB_NAME]) return;

  let data = JSON.parse(localStorage[DB_NAME]);

  data.forEach((item) => {
    createTemples(item.title, item.description, item.id, item.status);
  });
  //console.log(data);
});

//Событие на изменение checkbox
todoItems.addEventListener("change", (e) => {
  const toDoItem = findWrapper(e.target); //получаем <div class="taskWrapper"> задачи, который выделили
  const toDoItemId = +toDoItem.getAttribute("data-id"); //текущий id задачи
  const toDoItems = JSON.parse(localStorage[DB_NAME]); //распарсили данные в хранилище
  const status = e.target.checked; //статус checkbox (true или false)

  let currentToDoItem = findElement(toDoItems, toDoItemId); //получили объект для хранилища

  currentToDoItem.status = status; //присвоили ключу status новое значение

  localStorage.setItem(DB_NAME, JSON.stringify(toDoItems));
});

//Удаление  задачи
todoItems.addEventListener("click", (e) => {
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
  return elem.hasAttribute("data-id") ? elem : findWrapper(elem.parentElement);
}

//данные в хранилище
function useStorage(title, description, status = false) {
  let toDoItem = {
    id: itemId,
    title,
    description,
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

  //Создаем <div> для задачи с классом и атрибутом data-id
  const taskWrp = document.createElement("div");
  taskWrp.className = "taskWrapper";
  taskWrp.setAttribute("data-id", id);

  //Вложенный <div> для Названия задачи - title
  const titleTask = document.createElement("div");
  titleTask.className = "taskHeading";
  titleTask.innerHTML = title;

  //Вложенный <div> для Описания задачи - description
  const descTask = document.createElement("div");
  descTask.className = "taskDescription";
  descTask.innerHTML = description;

  const label = document.createElement("label");
  label.className = "d-flex justify-content-between align-items-center";

  //<div> для отметки Задача выполнена - completed
  const completed = document.createElement("div");
  completed.innerHTML = "completed";

  //Создаем checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "completed";

  if (status) {
    checkbox.checked = true;
    checkbox.setAttribute("checked", "checked");
  }

  //Создаем кнопку удаления одной задачи
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

//Получим все div с классом mainWrp, т.е. наши задачи
const mainWrapper = document.getElementsByClassName("mainWrp");

//Переберем и удалим , после чего очистим хранилище
delALL.addEventListener("click", function () {
  for (let i = mainWrapper.length - 1; i >= 0; i--) {
    mainWrapper[i].remove();
  }
  localStorage.clear();
});
