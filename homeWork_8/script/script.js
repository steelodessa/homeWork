let yearUser = Number(prompt("Введите год своего рожения", ""));
let newYear = new Date().getFullYear();
let age = newYear - yearUser;

if (yearUser) {
  let city = prompt("Укажите город, в котором живете", "");
  if (city) {
    let capitalCity;
    if (city === "Киев" || city === "Москва" || city === "Минск") {
      capitalCity = "Ты живешь в столице ";
    } else {
      capitalCity = "Ты живешь в городе ";
    }
    let sport = prompt(
      "Ваш любимый вид спорта. Например, Плавание, Бокс или Теннис",
      ""
    );
    if (sport) {
      let champion;
      switch (sport) {
        case "Плавание":
          champion = "Майкл Фред Фелпс";
          break;
        case "Бокс":
          champion = "Мохаммед Али";
          break;
        case "Теннис":
          champion = "Андре Агасси";
          break;
      }
      alert(
        `Твой возраст: ${age}\n${capitalCity}${city}\nИ, это круто! Хочешь стать, как ${champion}?`
      );
    } else {
      alert("Жаль, что Вы не захотели указать любимый вид спорта");
    }
  } else {
    alert("Жаль, что Вы не захотели указать свой город");
  }
} else {
  alert("Жаль, что Вы не захотели ввести свой год рождения");
}
