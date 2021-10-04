function Student(name, surname, birthday) {
  this.name = name;
  this.surname = surname;
  this.birthday = birthday;
  this.attendance = new Array(30);
  this.appraisal = new Array(30);
}

//метод получения возраста студента
Student.prototype.getAgeStudent = function () {
  return new Date().getFullYear() - this.birthday;
};

//метод для среднего бала
Student.prototype.averageScore = function () {
  let count = 0;
  const sum = this.appraisal.reduce(function (acc, el) {
    if (el !== undefined) {
      acc += el;
      count++;
    }
    return acc;
  }, 0);
  const result = sum / count;
  return +result.toFixed(1);
};

//получаем индексы массивов
Student.prototype.valueIndexAttendance = function () {
  return this.attendance.findIndex((element) => element === undefined);
};

//записываем в индекс массива true
Student.prototype.present = function () {
  if (this.valueIndexAttendance() <= 30 && this.valueIndexAttendance() >= 0) {
    return (this.attendance[this.valueIndexAttendance()] = true);
  } else {
    console.log("У вас только 30 занятий");
  }
};

//записываем в индекс массива false
Student.prototype.absent = function () {
  if (this.valueIndexAttendance() <= 30 && this.valueIndexAttendance() >= 0) {
    return (this.attendance[this.valueIndexAttendance()] = false);
  } else {
    console.log("У вас только 30 занятий");
  }
};

//передаем,проверяем и записываем в массив оценку
Student.prototype.mark = function (value) {
  const valueIndexAppraisal = this.appraisal.findIndex(
    (element) => element === undefined
  );
  if (value > 11 || value <= 0) {
    console.log("Введите оценку от 1 до 10");
  } else if (valueIndexAppraisal >= 0 && valueIndexAppraisal <= 30) {
    return (this.appraisal[valueIndexAppraisal] = value);
  } else {
    console.log("У вас только 30 занятий");
  }
};

//суммарная информация успеваемости
Student.prototype.summary = function () {
  const lessonsСompleted = [0, 0];

  for (let i = 0; i < this.attendance.length; i++) {
    if (this.attendance[i] !== undefined) {
      lessonsСompleted[0]++;
    }
    if (this.attendance[i]) {
      lessonsСompleted[1]++;
    }
  }

  const averageVisit = +(lessonsСompleted[1] / lessonsСompleted[0]).toFixed(1);

  if (this.averageScore() >= 9 && averageVisit >= 0.9) {
    return "Ути какой молодчинка!";
  } else if (
    (this.averageScore() < 9 && averageVisit >= 0.9) ||
    (this.averageScore() >= 9 && averageVisit < 0.9)
  ) {
    return "Норм, но можно лучше";
  }
  return "Редиска!";
};

/////////////////////////////////////////////////////////
const newStudent = new Student("Petr", "Petrov", 1990);

newStudent.absent();
newStudent.present();
newStudent.present();
newStudent.present();
newStudent.present();

newStudent.mark(10);
newStudent.mark(7);
newStudent.mark(9);

console.log(newStudent.getAgeStudent());
console.log(newStudent.summary());
console.log(newStudent);

/////////////////////////////////////////////////////////

const newStudent2 = new Student("Ivan", "Ivanov", 1995);
newStudent2.absent();
newStudent2.absent();
newStudent2.absent();
newStudent2.present();
newStudent2.present();
newStudent2.present();
newStudent2.present();

newStudent2.mark(10);
newStudent2.mark(8);
newStudent2.mark(9);

console.log(newStudent2.getAgeStudent());
console.log(newStudent2.summary());
console.log(newStudent2);
