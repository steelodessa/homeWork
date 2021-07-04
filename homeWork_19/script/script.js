"use strict";

//Math.pow(x, 2) + Math.pow(y, 2);
//Math.hypot(x, y)

let x = 4;
let y = 3;
let r = 36;

var result =
  Math.hypot(x, y) < Math.sqrt(r)
    ? "Точка внутри окружности"
    : "Tочка находится за пределами окружности";
alert(result);
