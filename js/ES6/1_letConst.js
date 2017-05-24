"use strict";
var a = 10;

if (true) {
	var a = 5;
	console.log(a);
};

console.log(a);


//Теперь с переменной объвденной через let
// let b = 10;

// if (true) {
// 	let b = 5;
// 	console.log(b);
// };

// console.log(b);

// let d = 10;
// d = 20;
// console.log(d);

// //CONST
// const user = {
// 	name: "Vasyl"
// };
// user.name = 'Petya';//допустимо
// // user = 5; //нельзя

// console.log(user.name);

//DESRUCTURIZATION

// let [name, surname] = ['Vasyl', 'Semikhov'];
// console.log(name);
// console.log(surname);

// let [firstName = 'Уася', secondName = 'Виссем', ...rest] = 'Vasyl Semikhov Rest Rest'.split(' ');
// let [firstName = 'Уася', secondName = 'Виссем', ...rest] = ['Vasyl', 'Semikhov'];
// console.log(firstName);// Rest, Rest массив

// let [firstName, lastName = defaultLastName()] = [];
// function defaultLastName() {
// 	return Date.now() + '-visitor'; 
// }

// console.log(firstName);
// console.log(lastName);

let user = {
	name: 'Vasyl',
	surname: 'Semikhov'
};

let {name: firstName, surname} = user;

console.log(firstName);
console.log(surname);




