'use strict';
// Есть реализация часиков на прототипах. Создайте класс, расширяющий её, добавляющий поддержку параметра precision, который будет задавать частоту тика в setInterval. Значение по умолчанию: 1000.

// Для этого класс Clock надо унаследовать. Пишите ваш новый код в файле extended-clock.js.
// Исходный класс Clock менять нельзя.
// Пусть конструктор потомка вызывает конструктор родителя. Это позволит избежать проблем при расширении Clock новыми опциями.

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

function ExtendedClock(options) {
	Clock.apply(this, arguments);
	this._precision = +options.precision || 1000;
}

ExtendedClock.prototype = Object.create(Clock.prototype);

ExtendedClock.prototype.start  = function() {
	var self = this;
	this._timer = setInterval(function(){
		self._render();
	}, this._precision);
}

var extendedClock = new ExtendedClock({template: 'h:m:s', precision: '2000'});
extendedClock.start();

