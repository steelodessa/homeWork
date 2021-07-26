"use strict";
let ladder = {
  step: 0,
  up: function () {
    this.step++;
    return this;
  },
  down: function () {
    this.step--;
    return this;
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(this.step);
    return this;
  },
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
ladder.up().up().down().showStep(); // 1

/*
return this - возвращаем объект ladder в каждом методе.
Слева от точки находится объект к которому привязан контекст метода up

1. Вызываем ladder.up() - увеличиваем step на +1, после чего, return this - возвращает объект ladder
2. Вызываем .up() - слева находится объект, который вернулся из п.1 (ladder.up())
3. (ladder.up().up()) . down()
4. (ladder.up().up().down()) . showStep()
*/
