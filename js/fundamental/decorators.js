"use strict";
function sum(a, b) {
  return a + b;
}

// передадим в функцию для сложения чисел нечисловые значения
alert( sum(true, { name: "Вася", age: 35 }) ); // true[Object object]

// var timers = {};

// // прибавит время выполнения f к таймеру timers[timer]
// function timingDecorator(f, timer) {
//   return function() {
//     var start = performance.now();

//     var result = f.apply(this, arguments); // (*)

//     if (!timers[timer]) timers[timer] = 0;
//     timers[timer] += performance.now() - start;

//     return result;
//   }
// }

// // функция может быть произвольной, например такой:
// var fibonacci = function f(n) {
//   return (n > 2) ? f(n - 1) + f(n - 2) : 1;
// }	

// // использование: завернём fibonacci в декоратор
// fibonacci = timingDecorator(fibonacci, "fibo");

// // неоднократные вызовы...
// alert( fibonacci(10) ); // 55
// alert( fibonacci(20) ); // 6765
// // ...

// // в любой момент можно получить общее количество времени на вызовы
// alert( timers.fibo + 'мс' );

// вспомогательная функция для проверки на число
function checkNumber(value) {
  return typeof value == 'number';
}

// декоратор, проверяющий типы для f
// второй аргумент checks - массив с функциями для проверки
function typeCheck(f, checks) {
  return function() {
    for (var i = 0; i < arguments.length; i++) {
      if (!checks[i](arguments[i])) {
        alert( "Некорректный тип аргумента номер " + i );
        return;
      }
    }
    return f.apply(this, arguments);
  }
}

function sum(a, b) {
  return a + b;
}

// обернём декоратор для проверки
sum = typeCheck(sum, [checkNumber, checkNumber]); // оба аргумента - числа

// пользуемся функцией как обычно
alert( sum(1, 2) ); // 3, все хорошо

// а вот так - будет ошибка
sum(true, null); // некорректный аргумент номер 0
sum(1, ["array", "in", "sum?!?"]); // некорректный аргумент номер 1

// TASKS
// Логирующий декоратор (1 аргумент)
// важность: 5решение
// Создайте декоратор makeLogging(f, log), который берет функцию f и массив log.

// Он должен возвращать обёртку вокруг f, которая при каждом вызове записывает («логирует») аргументы в log, а затем передает вызов в f.

// В этой задаче можно считать, что у функции f ровно один аргумент.

// Работать должно так:

// function work(a) {
//   /* ... */ // work - произвольная функция, один аргумент
// }

// function makeLogging(f, log) { /* ваш код */ }

// var log = [];
// work = makeLogging(work, log);

// work(1); // 1, добавлено в log
// work(5); // 5, добавлено в log

// for (var i = 0; i < log.length; i++) {
//   alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
// }

function work(a) {
	return a;
}

function makeLogging(f, log) {
 return function(a) {
		log.push(a);
		return f.call(this, a);
	}
}

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (var i = 0; i < log.length; i++) {
  alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}

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