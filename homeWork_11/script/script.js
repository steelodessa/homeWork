let numeric = +prompt("Введите число", "");
let result = true;
/*
if (numeric > 1) {
  for (let i = 2; i < numeric; i++) {
    if (numeric % i === 0) {
      result = false;
      break; //если один раз поделилось и получили false, то выходим из цикла
    }
  }
} else {
  result = false;
}
console.log(result);
*/
/*
if (numeric > 1) {
  let i = 2;
  while (i <= numeric / 2) {
    if (numeric % i === 0) {
      result = false;
      break;
    } else {
      i++;
    }
  }
} else {
  result = false;
}
console.log(result);
*/
if (isNaN(numeric) || numeric % 1 !== 0) {
  result = false;
} else {
  var sqrtNum = Math.sqrt(numeric);
  for (var i = 2; i <= sqrtNum; i++) {
    if (numeric % i === 0) {
      result = false;
    }
  }
}
console.log(sqrtNum, result);
