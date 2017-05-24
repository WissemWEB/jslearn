"use strict";
console.log(typeof 1);
console.log(typeof '1');
console.log(typeof true);
console.log(typeof false);
console.log(typeof null);
console.log(typeof function(){});
console.log(typeof {});


var date = new Date;
var arr = [1,2];
console.log({}.toString.call(date));
console.log({}.toString.call(arr));
console.log(Array.isArray(arr)); //true 
console.log(Array.isArray(date)); //false

function User(name, surname) {
	this.name = name;
	this.surname = surname;
}
function User1(name, surname) {
	this.name = name;
	this.surname = surname;
}
var user1 = new User('Vasyl', 'Semikhov');

console.log(user1 instanceof User);
console.log(user1 instanceof User1);

if (arr.splice) {
	console.log('arr is array')
}
else {
	console.log('arr is not array');
}
console.log({}.toString.call(new Array));
console.log({}.toString.call(new Date));
console.log({}.toString.call(new Function));
console.log({}.toString.call(null));
console.log({}.toString.call(NaN));
console.log({}.toString.call(undefined));