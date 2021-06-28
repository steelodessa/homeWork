"use strict";
function padString(str, num, addStr = " ", flag = true) {
  let error = "";
  if (!str || typeof str !== "string") {
    error += "Не корректно введен первый аргумент\n";
  }
  if (!num || typeof num !== "number") {
    error += "Не корректно введен второй аргумент\n";
  }

  if (error) {
    return error;
  } else {
    if (num >= str.length) {
      if (flag === false) {
        str = addStr.repeat(num - str.length) + str;
      } else {
        str += addStr.repeat(num - str.length);
      }
    } else {
      return str.substr(0, num);
    }
    return str;
  }
}

console.log(padString("hello", 8, "*"));
