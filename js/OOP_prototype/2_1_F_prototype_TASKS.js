'use strict';
function Rabbit(name) {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

delete Rabbit.prototype.eats; // (*)

alert( rabbit.eats );

//TASK2

// Есть функция Menu, которая получает аргументы в виде объекта options:

// /* options содержит настройки меню: width, height и т.п. */
// function Menu(options) {
//   ...
// }
// Ряд опций должны иметь значение по умолчанию. Мы могли бы проставить их напрямую в объекте options:

// function Menu(options) {
//   options.width = options.width || 300; // по умолчанию ширина 300
//   ...
// }
// …Но такие изменения могут привести к непредвиденным результатам, т.к. объект options может быть повторно использован во внешнем коде. Он передается в Menu для того, чтобы параметры из него читали, а не писали.

// Один из способов безопасно назначить значения по умолчанию – скопировать все свойства options в локальные переменные и затем уже менять. Другой способ – клонировать options путём копирования всех свойств из него в новый объект, который уже изменяется.

// При помощи наследования и Object.create предложите третий способ, который позволяет избежать копирования объекта и не требует новых переменных.

function Menu (options) {
	options = Object.create(options);
	options.width = options.width || 300;
	alert(options.width); //возьмет из вновь созданного объекта
	alert(options.height); //возьмет из исхожного объекта
}

//task3
// Создать объект тем же конструктором
// важность: 5решение
// Пусть у нас есть произвольный объект obj, созданный каким-то конструктором, каким – мы не знаем, но хотели бы создать новый объект с его помощью.

// Сможем ли мы сделать так?

// var obj2 = new obj.constructor();
// Приведите пример конструкторов для obj, при которых такой код будет работать верно – и неверно.

function RabbitTask3(name) {
	this.name = name;
	console.log('создан кролик с именем:' + ' ' + name);
}

var rabbit1 = new RabbitTask3('Bunny');
var rabbit2 = new rabbit1.constructor('Minnie');

console.log(rabbit1.constructor);
