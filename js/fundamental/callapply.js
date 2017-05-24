'use strict';
var admin = new User('Vasyl', 'Semikhov');
var user = new User('Alona', 'Boiko');
var fullNameUser = new User('Vasyl', 'Semikhov', 'Sergeevich');
var user2 = new User('Alex', 'Kushtapin', 'Mykolayovych');

console.log(showFullName.call(admin));
console.log(showFullName.call(user));
console.log(showNamePatronymic.call(fullNameUser, 'name', 'patronymic'));
console.log(showFullName.call(user2));
console.log(showNamePatronymic.call(user2, 'name', 'patronymic'));

function User(name, surname, patronymic) {
	this.name = name;
	this.surname = surname;
	this.patronymic = patronymic;
}

function showFullName() {
	return this.name + ' ' + this.surname;
}

function showNamePatronymic(firstPart, lastPart) {
	return this[firstPart] + ' ' + this[lastPart];
}

function prntArgs() {
	var join = [].join;
	return join.call(arguments, ':');
}

console.log(prntArgs(1,2,3));
var test = [].join;
console.log(test);


var arr = [1, 2, 3, 4];
function sum(arr) {
	return arr.reduce(function(sum,current) 	{
		return sum + current;
	}, 0);
}

// TASK1
// Есть функция sum, которая суммирует все элементы массива:

//  function sum(arr) {
//   return arr.reduce(function(a, b) {
//     return a + b;
//   });
// }

// alert( sum([1, 2, 3]) ); // 6 (=1+2+3)

// Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:

// function sumArgs() {
//   /* ваш код */
// }

// alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива

function sumArgs() {
	var reduce = [].reduce;
	return reduce.call(arguments, function(a,b) {return a + b;}, 0); // вызвали редюс отдолженный у массива в контексте аргументс
}

console.log( sumArgs(1,2,3) );


/*TASK2*/

// Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.

// Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.

// Например:

// // Применить Math.max к аргументам 2, -2, 3
// alert( applyAll(Math.max, 2, -2, 3) ); // 3

// // Применить Math.min к аргументам 2, -2, 3
// alert( applyAll(Math.min, 2, -2, 3) ); // -2

function applyAll(func) {
	// var func = arguments[0];
	var args = [].slice.call(arguments, 1);
	// return func(args); 
	return func.apply(this, args);
}

// console.log(applyAll('function(a,b) {return a + b;}',2,3));
console.log(applyAll(function(a,b) {return a + b;}, 2, 3))

// var userTest = {
//   name: "Viacheslav",
//   surname: "Bulatov",
//   showFullName: function() {
//     alert( this.name  + this.surname);
//   }
// }

// setTimeout(userTest.showFullName, 5000); //WRONG

// // FIRST WAY

// setTimeout(function(){
// 	userTest.showFullName();
// }, 5000);
function UserTest(name, surname) {
	this.name = name;
	this.surname = surname;
	this.showFullName = function() {
    alert( this.name  + this.surname);
	}
}

var test1 = new UserTest('Viacheslav','Bulatov');

setTimeout(test1.showFullName, 5000);


function testAlert() {
	alert ('ok');
}
setTimeout(testAlert, 2000);


