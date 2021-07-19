"use strict";

function palindrome(num, count) {
  //устанавливаем счетчик и по default он = 0
  count = count || 0;

  //Добавляем базовый случай, когда полученное число === перевернутому

  //преобразуем переданное число num в строку
  let str = num.toString();

  //Переворачиваем строку str. Через split - разбиваем строку на массив. Через reverse переворачиваем и join - снова объединяем в строку
  let strReverse = str.split("").reverse().join("");

  //Если полученное число(строка) === перевернутому записываем в объект и выходим
  if (str === strReverse) {
    return {
      result: num,
      steps: count,
    };
  }

  // Если не равно, то преобразуем strReverse в число и запускаем рекурсию со счетчиком + 1
  return palindrome(num + Number(strReverse), count + 1);
}

console.log(palindrome(96));
