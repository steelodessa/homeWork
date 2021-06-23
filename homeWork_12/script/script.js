let numeric = +prompt("Введите число", "");
if (numeric > 1) {
  let i = 2;
  while (numeric % i != 0) {
    i++;
  }
  console.log(i);
} else {
  console.log(NaN);
}

/*
if (numeric > 1) {
  for (let i = 2; i < numeric; i++) {
    if (numeric % i === 0) {
      console.log(i);
      break;
    } else {
      console.log(numeric);
    }
  }
}
console.log(NaN);
*/
