"use strict"
//CLOSURES TASKS
// var makeCounter = function() {
// 	var currentCount = 1;
// 	return function() {
// 		return currentCount++;
// 	}
// }

// var counter1 = makeCounter();
// console.log( counter1() );
// console.log( counter1() );
// console.log( counter1() );

// var counter2 = makeCounter();
// console.log( counter2() );
// console.log( counter2() );
// console.log( counter2() );

// // counter object
// var makeCounterObj = function() {
// 	var currentCount = 1;
// 	return {
// 		getNext: function() {
// 			return currentCount++;
// 		},
// 		set: function(value) {
// 			currentCount = value;
// 		},
// 		reset: function() {
// 			currentCount = 1;
// 		}
// 	}
// } 
// var counterObj1 = makeCounterObj();
// console.log( counterObj1.getNext() );
// console.log( counterObj1.getNext() );
// console.log( counterObj1.getNext() );
// counterObj1.reset();
// console.log( counterObj1.getNext() );
// console.log( counterObj1.getNext() );
// counterObj1.set(5);
// console.log( counterObj1.getNext() );
// console.log( counterObj1.getNext() );

// //CLOSURES TASK 1
// // Напишите функцию sum, которая работает так: sum(a)(b) = a+b.
// // Да, именно так, через двойные скобки (это не опечатка). Например:
// // sum(1)(2) = 3
// // sum(5)(-1) = 4

// function sum(value) {
// 	return function(currentVal) {
// 		return value + currentVal;
// 	}
// }
// console.log(sum(2)(-3));

// var makeCounterFun = function() {
// 	var currentCount = 1;
// 	function counter() {
// 		return currentCount++;
// 	}
// 	counter.set = function(value) {
// 		currentCount = value;
// 	};
// 	counter.reset = function() {
// 		currentCount = 1;
// 	};
// 	return counter;
// }
// var counterFun = makeCounterFun();
// console.log (counterFun());
// counterFun.set(5);
// console.log (counterFun());
// console.log (counterFun());
// counterFun.reset();
// console.log (counterFun());
// console.log (counterFun());


// function makeBuffer() {
// 	var currentBuffer = '';
// 	function bufferFun(value) {
// 		if (arguments.length == 0) {
// 			return currentBuffer;
// 		}
// 		else {
// 			currentBuffer = currentBuffer + value + ' ';
// 		}
// 	};
// 	bufferFun.clear = function() {
// 		currentBuffer = '';
// 	};
// 	return bufferFun;
// }
// var buffer = makeBuffer();
// // buffer('you');
// // buffer('need');
// // buffer('to');
// // buffer('use');
// // buffer('closures');
// buffer(0);
// buffer(1);
// buffer(0);
// console.log(buffer());
// buffer.clear();
// buffer(0);
// buffer(1);
// buffer(0);
// console.log(buffer());
// console.log(' hello world');

// var users = [{
//   name: "Вася",
//   surname: 'Иванов',
//   age: 20
// }, {
//   name: "Петя",
//   surname: 'Чапаев',
//   age: 25
// }, {
//   name: "Маша",
//   surname: 'Медведева',
//   age: 18
// }];

// function byField(field) {
// 	return function(a,b) {
// 		return a[field] > b[field] ? 1 : -1;
// 	}
// }

// users.sort(byField('age'));	
// users.forEach(function(user) {
// 	alert(user.name);
// });

// // ------
// var newArr = [-1, 1, 1, 2, 3, 4, -5];
// var newArrFiltered = newArr.filter(function(item){
// 	return ((item > 1) && (item < 4));	
// });
// console.log(newArrFiltered);

// //SOLUTION ONE
// function makeArmy() {

//   var shooters = [];

//   for (var i = 0; i < 10; i++) {
//     var shooter = (function(i) { // функция-стрелок
//       return function(){
//       	alert( i );
//       }; // выводит свой номер
//     })(i);
//     shooters.push(shooter);
//   }

//   return shooters;
// }

// //SOLUTION TWO
// function makeArmy() {

//   var shooters = [];

//   for (var i = 0; i < 10; i++) (function(i){
// 	    var shooter = function() { // функция-стрелок
// 	      alert( i ); // выводит свой номер
// 	    };
// 	    shooters.push(shooter);
//   	})(i);
//   return shooters;
// }

// var army = makeArmy();
// army[0](); // стрелок выводит 10, а должен 0
// army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9


// Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый, в который входят только те элементы arr, для которых func возвращает true.
// Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]". Использование должно быть таким:
// filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
// filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function filter(arr, func) {
// 	var result = [];
// 	var result = arr.filter(func);
// 	return result;
// }
// alert (filter(arr, function(a) {
// 	return a%2 ==0;
// }));

function filter(arr, func) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		var val = arr[i];
		if (func(val)) {
			result.push(val);
		}
	}
	return result;
}


function inBeetween(a,b) {
	return function(x) {
		return (x >= a && x <= b);
	};
}

function inArray(arr) {
	return function(x) {
		return arr.indexOf(x)!= -1;
	};
}
alert (filter(arr, inBeetween(3, 8 )));
alert (filter(arr, inArray([3, 11, 24])));