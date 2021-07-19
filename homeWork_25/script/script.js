"use strict";

function createSum() {
  let numb = 0;
  return function (a) {
    return (numb += a);
  };
}

const result = createSum();
//console.log(result);
console.log(result(3));
console.log(result(5));
console.log(result(20));

/*
  function createSum(numb) {
    return function (a) {
      return (numb += a);
    };
  }
  
  const result = createSum(0);
  //console.log(result);
  console.log(result(3));
  console.log(result(5));
  console.log(result(20));
  */
