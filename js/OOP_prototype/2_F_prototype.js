'use strict';
var animal = {
	eats: true
};

function Rabbit (name) {
	this.name = name;
}

Rabbit.prototype = animal;

var rabbitGirl = new Rabbit('крольчиха');

console.log(Object.getOwnPropertyNames(Rabbit));
console.log(Object.getOwnPropertyNames(Rabbit.prototype));
console.log(Rabbit.prototype);
console.log(Rabbit.prototype.constructor);

// TASKS
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

alert( rabbit.eats );