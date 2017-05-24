'use strict';
var obj = {};
console.log(obj.__proto__.toString());
console.log(obj);
alert(obj.__proto__.toString);
console.log(obj.toString());
console.log(Object.prototype);
console.log(obj.__proto__ == Object.prototype);
console.log(obj.__proto__.__proto__);
console.log(Object.prototype.__proto__);

var arr = new Array;
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr);

function showList() {
	return Array.prototype.join.call(arguments, '-');
}
console.log(showList('Vasyl', 'Peter', 'Maria'));

function showList1() {
	return [].join.call(arguments, '-');
}
console.log(showList1('Vasyl', 'Peter', 'Maria'));

String.prototype.repeat = function(times) {
	return new Array(times+1).join(this);
}
console.log('ля'.repeat(3));

// console.log([].join('ля'));

// TASKS
//task1
// Добавьте всем функциям в прототип метод defer(ms), который откладывает вызов функции на ms миллисекунд.

// После этого должен работать такой код:

// function f() {
//   alert( "привет" );
// }

// f.defer(1000); // выведет "привет" через 1 секунду
Function.prototype.defer = function(ms) {
	setTimeout(this, ms);
}

var hi = function() {
	console.log('hi');
};

hi.defer(4000);

//task2
// Добавить функциям defer с аргументами
// важность: 4решение
// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

// Например, должно работать так:

// function f(a, b) {
//   alert( a + b );
// }

// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
// То есть, должны корректно передаваться аргументы.

Function.prototype.defer1 = function(ms) {
	var f = this;
	console.log(f);
	return function() {
		// console.log(this);
		// console.log(ms);
		// console.log(arguments[0]);
		var context = this, args = arguments;
		setTimeout(function() {
			f.apply(context, args);
		}, ms);
	};
}


function f(a, b) {
	console.log(a + b);
}	

f.defer1(3000)(1, 2);