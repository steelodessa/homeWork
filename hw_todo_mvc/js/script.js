"use strict";

const todoController = {
  todoId: 0,
  todoIdInc() {
    return this.todoId++;
  },
  getData() {
    if (!todoModel.getData()) return false;
    return JSON.parse(todoModel.getData());
  },
  setData(inputs) {
    const todoItemObject = this.handleInputs(inputs);
    todoModel.saveData(todoItemObject);
    return todoItemObject;
  },
  handleInputs(inputs) {
    const obj = {};
    for (const input of inputs) {
      obj[input.name] = input.value;
    }
    obj["isCompleted"] = false;
    obj["id"] = this.todoId;
    return obj;
  },
  clearAllData() {
    todoModel.clearAllData();
  },
  removeTodoItem(id) {
    const data = this.getData();
    for (let item of data) {
      if (item.id === id) {
        data.splice(data.indexOf(item), 1);
      }
    }
    todoModel.setData(data);
    if (!this.getData().length) this.clearAllData();
  },
  todoItemCompleted(id) {
    const data = this.getData();
    for (let item of data) {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
    }
    todoModel.setData(data);
  },
};

const todoModel = {
  dbName: "saved_data",
  saveData(todoItem) {
    if (localStorage[this.dbName]) {
      const data = JSON.parse(localStorage[this.dbName]);
      data.push(todoItem);
      localStorage.setItem(this.dbName, JSON.stringify(data));
      return data;
    }
    localStorage.setItem(this.dbName, JSON.stringify([todoItem]));
  },
  getData() {
    if (!localStorage.getItem(this.dbName)) return false;
    return localStorage.getItem(this.dbName);
  },
  setData(data) {
    localStorage.setItem(this.dbName, JSON.stringify(data));
  },
  clearAllData() {
    localStorage.removeItem(this.dbName);
  },
};

const todoView = {
  form: document.querySelector("#todoForm"),
  todoItems: document.querySelector("#todoItems"),
  clearAllBtn: document.querySelector("#todo-btn-clearAll"),
  setEvents() {
    window.addEventListener("load", this.onLoadFunc.bind(this));
    this.form.addEventListener("submit", this.formSubmit.bind(this));
    this.clearAllBtn.addEventListener("mouseup", this.clearAllData.bind(this));
    this.todoItems.addEventListener("mouseup", this.deleteTodoItem.bind(this));
    this.todoItems.addEventListener(
      "mouseup",
      this.todoItemCompleted.bind(this)
    );
  },
  formSubmit(e) {
    e.preventDefault();

    const inputs = document.querySelectorAll(
      "#todoForm input, #todoForm textarea"
    );

    for (let input of inputs) {
      if (!input.value.length) return alert("No way you can add this shit");
    }

    const todoItemObject = todoController.setData(inputs);
    this.renderItem(todoItemObject);
    todoController.todoIdInc();

    e.target.reset();
  },
  onLoadFunc() {
    if (todoController.getData())
      todoController.getData().forEach((item) => {
        this.renderItem(item);
        todoController.todoId = item.id + 1;
      });
  },
  createTemplate(titleText = "", descriptionText = "", isCompleted, id) {
    const mainWrp = document.createElement("div");
    mainWrp.className = "col-4";
    mainWrp.setAttribute("id", id);

    const wrp = document.createElement("div");
    wrp.className = "taskWrapper";
    mainWrp.append(wrp);

    const title = document.createElement("div");
    title.innerHTML = titleText;
    title.className = "taskHeading";
    wrp.append(title);

    const description = document.createElement("div");
    description.innerHTML = descriptionText;
    description.className = "taskDescription";
    wrp.append(description);

    const checkIfCompleted = document.createElement("input");
    checkIfCompleted.setAttribute("type", "checkbox");
    checkIfCompleted.className =
      "form-check-input todo-item-completed-checkbox";
    if (isCompleted) checkIfCompleted.checked = true;
    wrp.append(checkIfCompleted);

    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("type", "button");
    closeBtn.className = "btn-close todo-close-btn";
    wrp.prepend(closeBtn);

    return mainWrp;
  },
  renderItem({ title, description, isCompleted, id }) {
    const template = this.createTemplate(title, description, isCompleted, id);
    this.todoItems.prepend(template);
  },
  clearAllData() {
    todoController.clearAllData();
    location.reload();
  },
  deleteTodoItem({ target }) {
    const parent = target.parentNode.parentNode;
    let id = +parent.getAttribute("id");
    if (target.className.includes("todo-close-btn")) {
      parent.remove();
      todoController.removeTodoItem(id);
    }
  },
  todoItemCompleted({ target }) {
    const parent = target.parentNode.parentNode;
    let id = +parent.getAttribute("id");
    if (target.className.includes("todo-item-completed-checkbox"))
      todoController.todoItemCompleted(id);
  },
};

todoView.setEvents();
