"use strict";
let User = class {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
	sayHi() {
		// return `Hi ${this.name}`;
		return `Hi ${this.name} ${this.surname}`;
	}

	get fullName() {
		return `${this.name} ${this.surname}`
	}

	set fullName(newValue) {
		[this.name, this.surname] = newValue.split(' ');
	}

	["test".toUpperCase()]() {
		return ("PASSED!");
	}

	static createGuest() {
		return new User('Site','Guest');
	}
}

// let user = new User('Alona');
// console.log(user.sayHi());
// user.sayHi();

// -----------

let allModels = {};

function createModel(Model, ...args) {
  let model = new Model(...args);

  model._id = Math.random().toString(36).slice(2);
  allModels[model._id] = model;

  return model;
}

let user = createModel(User, 'Vasyl', 'Pupkin');

user.sayHi(); // Vasyl

console.log( allModels[user._id].name ); // Vasyl
console.log(allModels);
console.log(user.fullName);
user.fullName = 'Alona Boiko';
console.log(user.fullName);
console.log(user.TEST()); //PASSED!

let guest = User.createGuest();
console.log(`${guest.name} ${guest.surname}`);

// -----

// Наследование
class Animal {
	constructor (name) {
		this.name = name;
	}
	walk() {
		console.log(`Animal ${this.name} is walking`);
	}
}

class Rabbit extends Animal {
	walk() {
		super.walk();
		console.log(`Rabbit ${this.name} is walking`);
	}
}

var rabbit = new Rabbit('Vasya');
rabbit.walk();
