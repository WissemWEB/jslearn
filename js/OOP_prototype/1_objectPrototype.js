'use strict';
var animal = {
	eats: true
};
var rabbit = {
	jumps: true,
	__proto__: animal
};

// rabbit.__proto__ = animal;

console.log(rabbit.jumps);
console.log(rabbit.eats);

for (var key in rabbit) {
	console.log(key + " = " + rabbit[key]);
};

console.log(rabbit.hasOwnProperty('eats')); //hasOwnProperty проверяет свое ли свойство у объекта
console.log(rabbit.hasOwnProperty('jumps'));

//выводим только свои свойства
for (var key in rabbit) {
	if (!rabbit.hasOwnProperty(key)) continue;
	console.log(key + " = " + rabbit[key]);
};

var newAnimal = Object.create(animal);

for (var key in newAnimal) {
	console.log(key + " = " + newAnimal[key]);
};

var data = { //создаем объект коллекцию
	name: 'vasyl',
	age: 35,
	text: 'hi'
};

console.log(data.toString); //функция но она нам не надо

var objectWithoutInnerMethods = Object.create(null); //Создаем объект без встроенных методов
objectWithoutInnerMethods.name = 'Vasyl';

for (var key in objectWithoutInnerMethods) {
	console.log(key + " = " + objectWithoutInnerMethods[key]);
};

//Методы для работы с __proto__
console.log( Object.getPrototypeOf(rabbit) ); //получем прото объекта
console.log(rabbit.__proto__); //то же самое
console.log( Object.setPrototypeOf(rabbit, animal) ); //получем прото объекта

//TASKS
// Есть объекты:

// var head = {
//   glasses: 1
// };

// var table = {
//   pen: 3
// };

// var bed = {
//   sheet: 1,
//   pillow: 2
// };

// var pockets = {
//   money: 2000
// };
// Задание состоит из двух частей:

// Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму pockets -> bed -> table -> head.

// То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.

// После этого ответьте на вопрос, как быстрее искать glasses: обращением к pockets.glasses или head.glasses? Попробуйте протестировать.
var head = {
  glasses: 1
};

var table = {
  pen: 3
};

var bed = {
  sheet: 1,
  pillow: 2
};

var pockets = {
  money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log(pockets.pen);
console.log(bed.glasses);
console.log(table.money);
