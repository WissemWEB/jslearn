"use strict";
for (let i of "Vasyl") {
	console.log(i);
};

let arr = ["Vasya", "Masha", "Petya"];

let iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// свои итераторы
//перечитать главу еще раз

