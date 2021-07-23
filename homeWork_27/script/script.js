"use strict";

//Создаем объект с 3-мя ключами-методами: incCb, decCb, getCb. В каждом ключе лежит функция и принимает 1 аргумент arg.
const obj = {
  incCb: function (arg) {
    //console.log(arg);
    let a = "increase " + arg;
    //alert(a);
    //console.log(a);
    return a;
  },

  decCb: function (arg) {
    let a = "decrease " + arg;
    //console.log(a);
    return a;
  },

  getCb: function (arg) {
    let a = "get " + arg;
    //console.log(a);
    return a;
  },

  getStatCb: function (increseArg, decreseArg, getArg) {
    return {
      increse: increseArg,
      decrese: decreseArg,
      get: getArg,
    };
  },

  reset: function (count, countIncCb, countDecCb, countGetCb) {
    //let a = "get " + arg;
    //console.log(a);
    return {
      increse: countIncCb,
      decrese: countDecCb,
      get: countGetCb,
    };
  },
};

function counter(num = 0, obj) {
  let count = num;
  let countIncCb = 0; //счетчик для increse
  let countDecCb = 0; //счетчик для decrese
  let countGetCb = 0; //счетчик для get

  //увеличивает и возвращает count
  function increse() {
    //return ++count;
    //return obj.incCb ? obj.incCb(++count) : ++count; //проверка на существование метода в объекте
    //Знак вопроса перед вызовом свойства или метода проверяет существует ли объект
    return obj?.incCb ? obj.incCb(++count, ++countIncCb) : ++count;
  }

  //уменьшает и возвращает count
  function decrese() {
    return obj?.decCb ? obj.decCb(--count, ++countDecCb) : --count;
  }

  //get - возвращает текущий count
  function get() {
    return obj?.getCb ? obj.getCb(count, ++countGetCb) : count;
  }

  //подсчитывает сколько раз были вызываны функции (increase, decrease, get)
  function getStatistic() {
    return obj?.getStatCb
      ? obj.getStatCb(countIncCb, countDecCb, countGetCb)
      : count;
  }

  //Обнуляем наши счетчики
  function reset() {
    return obj?.reset
      ? obj.reset(
          (count = 0),
          (countIncCb = 0),
          (countDecCb = 0),
          (countGetCb = 0)
        )
      : (count = 0);
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

console.log(newCounter.increse()); //increse 1
console.log(newCounter.increse()); //increse 2
console.log(newCounter.increse()); //increse 3
console.log(newCounter.increse()); //increse 4
console.log(newCounter.decrese()); //decrese 3
console.log(newCounter.decrese()); //decrese 2
console.log(newCounter.get()); //get 2 - текущий
console.log(newCounter.getStatistic()); //статистика вызовов {increse: 4, decrese: 2, get: 1}
console.log(newCounter.reset()); //обнуляем {increse: 0, decrese: 0, get: 0}
console.log(newCounter.increse()); //increse 1
console.log(newCounter.increse()); //increse 2
