let numeric = +prompt("Введите число", "");
let result = true;
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
