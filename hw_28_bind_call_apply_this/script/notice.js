//"use strict";

//Bind
const auto = {
  brand: "BMW",
  drive: function () {
    //console.log(this);
    return `Заведем наш ${this.brand}`;
  },
};
console.log(auto.drive()); //Заведем наш BMW

//Создаем новую переменную и присваиваем ей метод auto.drive без ()
const autoDrive = auto.drive;

console.log(autoDrive());
//При вызове autoDrive() получаем: Заведем нашу undefined.
//undefined - nак как значение this в этом случае равен глобальному объекту window. Происходит потому что новый метод autoDriveTwo не был ни к чему привязан. Важно!!! Значение this внутри какой-то функции определяется тем, где вызывается эта функция, а не где изначально функция определена. В нашем примере функция drive была определена/создана в объекте auto. Эта функция drive будет привязана к объекту auto в случае, если мы будем вызывать ее через объект auto (auto.drive)

//Метод bind. чтобы принудительно привязать контекст нашей функции к нужному объекту. Т.е. может менять значение this внутри нашей функции. Для применения bind в скобках указываем нужный нам объект

const autoDriveTwo = auto.drive.bind(auto); //создаем новую функцию autoDriveTwo и когда она будет вызываться, значение this внутри этой функции будет равен this объекта, который передали в метод bind

console.log(autoDriveTwo()); //Заведем наш BMW

//Создадим еще один объект
const motorBike = {
  brand: "Suzuki",
};
//Используем метод drive, который был создан в объекте auto для нового объекта motorBike. Для этого создадим новую функцию motoDrive и передадим внутрь метода bind объект motorBike. В этом примере, наш this равен this объекта motorBike
const motoDrive = auto.drive.bind(motorBike);
console.log(motoDrive()); //Заведем наш Suzuki

//Также, в метод bind можно передавать объект в виде {ключ: значение}
const ship = auto.drive.bind({ brand: "Корабль" });
console.log(ship()); //Заведем наш Корабль

//-----------Пример 2 BIND-----------

const bill = {
  tip: 0.1,
  calculate(total) {
    console.log(this); //проверим какой this
    return total + total * this.tip;
  },
};

const pay = bill.calculate(1000);
console.log(pay);
//в этом примере this равен объекту bill

//Используем наш метод calculate за пределами объекта bill.
const payCount = bill.calculate; //здесь находится функция calculate.
console.log(payCount(1000)); //Если вызвать функцию payCount() получим NaN, так как this равен глобальному объекту Window. Чтобы все заработало, используем метод bind
const payCountOne = bill.calculate.bind(bill);
console.log(payCountOne(1000)); //1100

const payCountTwo = bill.calculate.bind({ tip: 0.2 }); //this равен другому объекту
console.log(payCountTwo(1000)); //1200

//Еще вариант с bind со вторым аргументом
const payCountThree = bill.calculate.bind({ tip: 0.5 }, 1000); //this равен другому объекту
console.log(payCountThree()); //1500

/*
Контекст привязывается один раз и мы не можем его повторно перепривязывать по цепочке. Отработает первый bind(bill)
bill.calculate.bind(bill).bind({ tip: 0.2 })
*/
//-----------------CALL---APPLY--------------
/*
Call и apply выполняют тоже самое что и bind, только они автоматически запускают новую функцию
*/
const billTwo = {
  tip: 0.1,
  calculate(total) {
    console.log(this); //проверим какой this
    return total + total * this.tip;
  },
};

//Сравниваем
const payTwo = billTwo.calculate.bind(billTwo);
console.log(payTwo(1000));

//для передачи аргументов с помощью call нам нужно эти аргументы передавать не внутрь новой функции payThree, а в качестве аргумента в метод call
const payThree = billTwo.calculate.call(billTwo, 1000);
console.log(payThree);

//Apply, как call только аргументы в метод передаются в виде массива
const payFour = billTwo.calculate.apply(billTwo, [1000]);
console.log(payFour);

//Еще пример
const bill3 = {
  tip: 0.1,
  calculate(total) {
    console.log(this); //проверим какой this
    return total + total * this.tip;
  },
  detail(dish1, dish2, sum) {
    return `Ваш заказ (${dish1}, ${dish2}) стоит ${this.calculate(sum)}`;
  },
};

const pay3 = bill3.detail("pizza", "salad", 1000);
console.log(pay3); //Ваш заказ (pizza, salad) стоит 1100

const pay4 = bill3.detail.call(bill3, "pizza", "salad", 1000);
console.log(pay4); //Ваш заказ (pizza, salad) стоит 1100

const pay5 = bill3.detail.apply(bill3, ["pizza", "salad", 1000]);
console.log(pay5); //Ваш заказ (pizza, salad) стоит 1100
