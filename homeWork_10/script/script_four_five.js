console.log("------4 задание---------");
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i <= arr.length - 1; i++) {
  sum += arr[i];
}
console.log(sum);

console.log("------5 задание---------");
//Короче
let sumPow = 0;
for (let i = 0; i <= arr.length - 1; i++) {
  sumPow += arr[i] ** 2;
}

/*
//Длинее
for (let i = 0; i <= arr.length - 1; i++) {
  let pow = Math.pow(arr[i], 2);
  sumPow += pow;
} */

console.log(sumPow);
