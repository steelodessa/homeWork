const formInfo = document.getElementById("form"); //получили <form></form>

formInfo.addEventListener("submit", function (event) {
  event.preventDefault();

  //получаем коллекцию всех input
  let userFields = document.querySelectorAll(
    "#form input, #form select, #form textarea"
  );

  let objectForInfo = {}; //пустой объект для localStorage

  for (let key of userFields) {
    objectForInfo[key.name] = key.value;
  }
  //console.log(objectForInfo);

  //Создаем хранилище и помещаем объект с данными в формате JSON
  localStorage.setItem("saveUserFields", JSON.stringify(objectForInfo));

  //Переходим на новую страницу
  window.open("form-info.html");
});
