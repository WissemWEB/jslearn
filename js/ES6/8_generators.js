"use strict";
function* generateSequence() {
	yield 1;
	yield 2;
	return 3;
}

let generator = generateSequence();
let one  = generator.next();
console.log(JSON.stringify(one));
let two = generator.next();
console.log(JSON.stringify(two));
let three = generator.next();
console.log(JSON.stringify(three));
let four = generator.next();
console.log(JSON.stringify(four)); //не имеет смысла, так как  вызов закончен 
console.log(four.value); //undefined
console.log(four.done); //true

//генеретор итератор for of

function* generateSequenceIter() {
	yield 1;
	yield 2;
	// return 3;
	yield 3;
}
let generator1 = generateSequenceIter();
for (let value of generator1) {
	console.log(value); // 1 потом 2 потом 3
}

// Композиция генераторов

// Один генератор может включать в себя другие. Это называется композицией.

// Разберём композицию на примере.
function* generateSequence1(start, end) {
	for (let i = start; i <= end; i++) {
		yield i;
	}  
}
let generator2 = generateSequence1(1, 6);
let generator2arr = [...generateSequence1(1,6)];
// console.log(generateSequence1(1, 6).next().next());
console.log(generator2arr);

function* generateAlphaNum() {
	yield* generateSequence1(48,57);
	yield* generateSequence1(65,90);
	yield* generateSequence1(97,122);
}
let generatorAlphaNum = generateAlphaNum();
let str = '';
for (let code of generateAlphaNum()) {
	str += String.fromCharCode(code);
};
console.log(str);

//yield дорога в обе стороны

function* ask() {
	let result = yield "2+2?";
	console.log(result);
	let result2 = yield "3+3?";
	console.log(result2);
}

let generator3 = ask();
console.log(generator3.next().value);
console.log(generator3.next(4).value);
console.log(generator3.next(9).done);
