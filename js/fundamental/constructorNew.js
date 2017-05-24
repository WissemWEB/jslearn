'use strict';
// function Animal(name) {
// 	this.name = name;
// 	this.canWalk = true;
// }
// var animal = new Animal('lion');
// console.log(animal.canWalk);

// function User(firstName, lastName) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	var phrase = 'HI';
// 	function getFullName() {
// 		return firstName + ' ' + lastName;
// 	}
// 	this.sayHi = function() {
// 		return phrase + ',' + ' ' + getFullName();
// 	}
// }
// var vasyl = new User('Vasyl', 'Semikhov');
// alert(vasyl.firstName);
// alert(vasyl.sayHi());

// // TASKS

// // **TASK1**

// // Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:

// // Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
// // Метод sum() возвращает сумму запомненных свойств.
// // Метод mul() возвращает произведение запомненных свойств.
// // Пример использования:

// // var calculator = new Calculator();
// // calculator.read();

// // alert( "Сумма=" + calculator.sum() );
// // alert( "Произведение=" + calculator.mul() );

// function Calcultaor() {
	
// 	this.read = function() {
// 		this.a = +prompt('Enter first value: ', 0);
// 		this.b = +prompt('Enter second value: ', 0);
			
// 	};
// 	this.sum = function() {
// 		return this.a + this.b;
// 	};
// 	this.mul = function() {
// 		return this.a * this.b;
// 	};
// }
// var calculator = new Calcultaor();

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// // **TASK2**
// // Напишите функцию-конструктор Accumulator(startingValue). Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.

// // Более формально, объект должен:

// // Хранить текущее значение в своём свойстве value. Начальное значение свойства value ставится конструктором равным startingValue.
// // Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.
// // Таким образом, свойство value является текущей суммой всего, что ввел посетитель при вызовах метода read(), с учетом начального значения startingValue.

// // Ниже вы можете посмотреть работу кода:

// // var accumulator = new Accumulator(1); // начальное значение 1
// // accumulator.read(); // прибавит ввод prompt к текущему значению
// // accumulator.read(); // прибавит ввод prompt к текущему значению
// // alert( accumulator.value ); // выведет текущее значение
//  function Accumulator(startingValue) {
//  	this.value = startingValue;
//  	this.read = function() {
//  		this.value += +prompt('Enter value: ', 0);
//  	};
//  }
// var accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// accumulator.read();
// console.log( accumulator.value );

// function Accumulator(startingValue) {
//  	this.value = startingValue;
//  	this.read = function() {
//  		this.value += +prompt('Enter value: ', 0);
//  	};
//  }

//  function PowerCalculator() {
//  	this.methods = {
//  		'+': function(a, b) {
//  			return this.a + this.b;
//  		}
//  	}
//  	this.calculate = function(a, b, method) {
//  		this.a = a;
//  		this.b = b;
//  		return this.methods[method](a, b);
//  	}
// }

// var calc = new PowerCalculator();
// console.log(calc.calculate(2, 3, '+'));

var methods = {};
// methods['+'] = function(a, b) {
// 	return a + b;
// }
// console.log(methods[method](2, 3));
function addMethod(method, func) {
	methods[method] = func;
}
function calculate(str) {
	var arr = str.split(' ');
	return methods[arr[1]](+arr[0], +arr[2]);
}
addMethod('+', function(a,b){ return a + b;});
addMethod('*', function(a,b){ return a * b;});
addMethod('**', function(a,b){ return Math.pow(a,b);});
console.log(methods['*'](2,3));
console.log(methods['+'](2,3));
console.log(methods['**'](2,3));
console.log(calculate('2 + 3'));
console.log(calculate('2 * 3'));
console.log(calculate('2 ** 3'));

function PowerCalculator() {
	methods = {};
	this.addMethod = function(method, func) {
		methods[method] = func;
	};
	this.calculate = function(str) {
		var arr = str.split(' ');
		if(!methods[arr[1]] || isNaN(arr[0]) || isNaN(arr[2])) {
			return "Check the data, that you have input. It's incorrect";
		} else {
				return methods[arr[1]](+arr[0], +arr[2]);
		}
	}
}
var calc = new PowerCalculator();
calc.addMethod('+', function(a,b) {return a + b});
calc.addMethod('*', function(a,b) {return a * b});
calc.addMethod('**', function(a,b) {return a ** b});
console.log(calc.calculate('fgh + 3'));
console.log(calc.calculate('2 * 3'));
console.log(calc.calculate('2 ** 3'));
console.log(isNaN(12));


