'use strict';
// var timerId = setTimeout(function() {
// 	alert(1);
// }, 1000);
// clearTimeout(timerId);
// alert(timerId);

// var timerId = setInterval(function() {
// 	console.log(1);
// }, 1000);
// setTimeout(function() {
// 	clearInterval(timerId);
// }, 5000);

function printNumbersInterval() {
	var i = 1;
	var intervalId = setInterval(function(){
		console.log(i);
		if (i == 20) clearInterval(intervalId);
		i++;
	}, 100);
}
printNumbersInterval();
// var timeout = 3000;
// var timerId = setTimeout(function(){
// 	console.log('OK');
// }, timeout);

// var timerId1 = setTimeout(function(){
// 	console.log('OK');
// }, 1000);


function f() {
	console.log(1);
	var timerId4 = setTimeout(f, 1000);
}

// setTimeout(function() {
// 	clearTimeout(timerId4);
// }, 5000);

// var timerId2 = setTimeout(function(){
// 	console.log('OK');
// }, 1000);
// console.log(timerId);
// console.log(timerId1);
// console.log(timerId2);
// clearTimeout(timerId);
// console.log(timerId);
