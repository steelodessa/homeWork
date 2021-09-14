let user = {
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: {
      a1: 1,
      b1: 2,
      c1: 3,
      d1: {
        a2: 3,
        b2: 3,
        c2: 3,
      },
    },
  },
};

function deepFreeze(obj) {
  // воз­вра­ща­ем массив, состоящий из всех имен собственных (неунаследованных) свойств
  let propNames = Object.getOwnPropertyNames(obj);

  // "замораживаем" все свойства переданного объекта
  propNames.forEach(function (name) {
    let prop = obj[name];

    // "замораживаем" свойство если оно явлется объектом и не равно null
    if (typeof prop == "object" && prop !== null) deepFreeze(prop);
  });

  // "замораживаем" переданный объект
  return Object.freeze(obj);
}

// "замораживаем" объект и его свойства с помощью созданной функции
deepFreeze(user);

//Проверяем задав объекту новое свойство и значение
user.test = "test";
console.log(user.test); // если объект заморожен получаем undefined

//Object.isFrozen () определяет, заморожен ли объект.
console.log(Object.isFrozen(user));
console.log(Object.isFrozen(user.data));
console.log(Object.isFrozen(user.data.d));
console.log(Object.isFrozen(user.data.d.d1));
