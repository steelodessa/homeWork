"use strict";

let cache = new Map();

function cacheUser(user) {
  if (!cache.has(user)) {
    console.log("Записали в кэш");
    if (cache.size >= 10) cache.delete(Array.from(cache.keys())[0]);
    cache.set(user, Date.now());
  } else {
    console.log("Достали с кеша ...");
  }
  return cache.get(user);
}

let john = { name: "john" };
let ann = { name: "ann" };
let kate = { name: "kate" };
let alex = { name: "alex" };
let mike = { name: "mike" };

cacheUser(john);
cacheUser(ann);
cacheUser(kate);
cacheUser(alex);
cacheUser(mike);
cacheUser(kate);
cacheUser(alex);
cacheUser(john);
cacheUser(ann);
cacheUser(kate);
cacheUser(alex);
cacheUser(mike);
cacheUser(kate);
cacheUser(alex);
console.log(cache);
