'use strict';
// console.log([1,2,3]);
// console.log(Object.prototype.__proto__);
// console.log(Array.prototype.__proto__);
// console.log([1,2,3].__proto__);
// console.dir([1,2,3]);

//класс животное
//конструктор животного
function Animal(name) {
  this.name = name;
  this.speed = 0;
}
//прототайп животного
Animal.prototype.run = function(speed) {
  this.speed += speed;
  alert( this.name + ' бежит, скорость ' + this.speed );
};

Animal.prototype.stop = function() {
  this.speed = 0;
  alert( this.name + ' стоит' );
};

// класс кролик
//конструктор
function Rabbit(name) {
  this.name = name;
  this.speed = 0;
}

Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.jump = function() {
  this.speed++;
  alert( this.name + ' прыгает' );
};

Rabbit.prototype.run = function() {
	Animal.prototype.run.apply(this, arguments);
	this.jump();
}
var rabbit = new Rabbit('Кроль');

rabbit.run(30);


//Переписать на прототипах класс часы. Приватные свойства и методы сделать защищенными.

// Исходный код в функциональном стиле

// function Clock(options) {

//   var template = options.template;
//   var timer;

//   function render() {
//     var date = new Date();

//     var hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     var min = date.getMinutes();
//     if (min < 10) min = '0' + min;

//     var sec = date.getSeconds();
//     if (sec < 10) sec = '0' + sec;

//     var output = template.replace('h', hours).replace('m', min).replace('s', sec);

//     console.log(output);
//   }

//   this.stop = function() {
//     clearInterval(timer);
//   };

//   this.start = function() {
//     render();
//     timer = setInterval(render, 1000);
//   }


function Clock(options) {
	this._template = options.template;
}

Clock.prototype._render = function() {
	var date = new Date();
	var hours = date.getHours();
  if (hours < 10) hours = '0' + hours;

  var min = date.getMinutes();
  if (min < 10) min = '0' + min;

  var sec = date.getSeconds();
  if (sec < 10) sec = '0' + sec;

  var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);
	
	console.log(output);
}

Clock.prototype.start = function() {
	var self = this;
	this._timer = setInterval(function(){
		self._render();
	}, 1000);
}

Clock.prototype.stop = function() {
	clearInterval(this._timer);
}

var clock = new Clock({template: 'h:m:s'});
clock._render();
// console.log(clock._timer);
clock.start();
clock.stop();

// Есть реализация часиков на прототипах. Создайте класс, расширяющий её, добавляющий поддержку параметра precision, который будет задавать частоту тика в setInterval. Значение по умолчанию: 1000.

// Для этого класс Clock надо унаследовать. Пишите ваш новый код в файле extended-clock.js.
// Исходный класс Clock менять нельзя.
// Пусть конструктор потомка вызывает конструктор родителя. Это позволит избежать проблем при расширении Clock новыми опциями.