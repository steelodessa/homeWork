"use strict";

const obj = {
  incCb: function (arg) {
    let a = "increase " + arg;
    console.log(a);
    return a;
  },

  decCb: function (arg) {
    let a = "decrease " + arg;
    console.log(a);
    return a;
  },

  getCb: function (arg) {
    let a = "get " + arg;
    console.log(a);
    return a;
  },
};

function counter(num = 0, obj) {
  let count = num;
  let countIncCb = 0; //счетчик для increse
  let countDecCb = 0; //счетчик для decrese
  let countGetCb = 0; //счетчик для get

  function increse() {
    ++countIncCb;
    return obj.incCb(++count);
  }

  function decrese() {
    ++countDecCb;
    return obj.decCb(--count);
  }

  function get() {
    ++countGetCb;
    return obj.getCb(count);
  }

  function getStatistic() {
    let getSt = { countIncCb, countDecCb, countGetCb };
    console.log(getSt);
  }

  function reset() {
    return (count = 0);
  }

  return {
    increse,
    decrese,
    get,
    getStatistic,
    reset,
  };
}

let newCounter = counter(0, obj);

newCounter.increse(); //increse 1
newCounter.increse(); //increse 2
newCounter.increse(); //increse 3
newCounter.decrese(); //decrese 2
newCounter.decrese(); //decrese 1
newCounter.get(); //get 2
newCounter.getStatistic(); //{countIncCb: 3, countDecCb: 2, countGetCb: 1}
newCounter.reset();
newCounter.get(); //get 0
