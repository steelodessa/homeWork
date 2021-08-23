"use strict";
const DB_NAME = "saved_data";
const formElem = document.getElementById("todo-form");
const clearAllElem = document.getElementById("clear-all");

initToDo();

//Событие на форму
formElem.addEventListener("submit", handleToDoFormSubmit);
document.addEventListener("click", handleTaskClick);
document.addEventListener("click", handleCloseTaskButtonClick);

//Событие Очистить все
clearAllElem.addEventListener("click", handleClearAllClick);

function handleToDoFormSubmit(event) {
  event.preventDefault();

  //Получаем Название задачи
  const inputElem = document.getElementById("new-task");
  const taskText = inputElem.value;
  if (!taskText) return;

  //Получаем Описание задачи
  const inputElemText = document.getElementById("new-task-textarea");
  const taskTextArea = inputElemText.value;
  if (!taskTextArea) return;

  const taskElem = createTaskElement(taskText, taskTextArea);
  addToList(taskElem);

  //После очищаем поля и устанавливаем фокус на название новой задачи
  inputElem.value = "";
  inputElem.focus();

  inputElemText.value = "";
}

function handleTaskClick(event) {
  const element = event.target;

  if (element.closest(".task") && !element.classList.contains("close")) {
    toggleTask(element.closest(".task"));
  }
}

function handleCloseTaskButtonClick(event) {
  const element = event.target;

  if (element.classList.contains("close")) {
    removeTask(element.closest(".task"));
  }
}

function handleClearAllClick(event) {
  event.preventDefault();

  document.getElementById("todo-list").innerHTML = "";
  updateStorageTasks();
  toggleClearAllElem();
}

//Создание новой задачи
function createTaskElement(title, description) {
  const taskElem = document.createElement("li");
  const taskElemTitle = document.createElement("div");
  const taskElemArea = document.createElement("div");
  const taskText = document.createElement("span");
  const taskTextArea = document.createElement("span");
  const closeBtn = document.createElement("button");

  taskElem.classList =
    "task list-group-item list-group-item-action list-group-item-warning";
  taskText.textContent = title;
  taskTextArea.textContent = description;
  closeBtn.classList = "close text-danger";
  closeBtn.innerHTML = "&times;";
  closeBtn.setAttribute("type", "button");
  taskText.id = "title";
  taskElemArea.id = "description";

  taskElem.append(taskElemTitle);
  taskElemTitle.append(taskText);
  taskElem.append(taskElemArea);
  taskElemArea.append(taskTextArea);

  taskElemTitle.append(closeBtn);

  return taskElem;
}

//Функция добавления задач
function addToList(taskElem, updateStorage = true) {
  document.getElementById("todo-list").append(taskElem);
  if (updateStorage) updateStorageTasks();
  toggleClearAllElem();
}

function toggleTask(taskElem) {
  if (taskElem.classList.contains("list-group-item-warning")) {
    setTaskCompleted(taskElem);
  } else {
    setTaskOpened(taskElem);
  }
  updateStorageTasks();
}

function setTaskOpened(taskElem) {
  taskElem.classList.remove("list-group-item-success", "text-decor");
  taskElem.classList.add("list-group-item-warning");
}

function setTaskCompleted(taskElem) {
  taskElem.classList.remove("list-group-item-warning");
  taskElem.classList.add("list-group-item-success", "text-decor");
}

function removeTask(taskElem) {
  taskElem.remove();
  updateStorageTasks();
  toggleClearAllElem();
}

//Собираем массив данных
function getTasksData() {
  const tasksArr = [];

  for (const taskElem of document.querySelectorAll(".task")) {
    const taskObj = {};
    //console.log(taskElem);
    taskObj.title = taskElem.querySelector("#title").textContent;

    taskObj.description = taskElem.querySelector("#description").textContent;
    taskObj.completed = taskElem.classList.contains("list-group-item-success");

    tasksArr.push(taskObj);
  }
  console.log(tasksArr);
  return tasksArr;
}

//Сохраненние данных в хранилище
function updateStorageTasks() {
  localStorage.setItem(DB_NAME, JSON.stringify(getTasksData()));
}

//Получаем данные из хранилища
function getStorageTasks() {
  return JSON.parse(localStorage.getItem(DB_NAME));
}

function populateTasks(tasksArr) {
  tasksArr.forEach(function (taskObj) {
    //console.log(taskObj);
    const taskElem = createTaskElement(taskObj.title, taskObj.description);
    if (taskObj.completed) setTaskCompleted(taskElem);
    addToList(taskElem, false);
  });
}

//функция показа Clear all для удаления всех задач
function toggleClearAllElem() {
  //Получаем кол-во задач (task)
  const tasksCount = document.querySelectorAll(".task").length;

  //Получаем элемент Clear all
  const clearAllElem = document.getElementById("clear-all");

  //Если задач больше 1 то показываем Clear all
  clearAllElem.style.display = tasksCount ? "block" : "none";
}

function initToDo() {
  const tasksArr = getStorageTasks();
  //console.log(tasksArr);
  if (tasksArr) populateTasks(tasksArr);
  toggleClearAllElem();
}
