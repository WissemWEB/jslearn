'use strict';
// console.log('' + 1 + 0);
// console.log('' - 1 + 0);
// console.log(true + false);
// console.log(6/'3');
// console.log('2'*'3');
// console.log(4 + 5 + 'px');
// console.log((4 + 5) + 'px');
// console.log(4 + (5 + 'px'));
// console.log('$' + 4 + 5);
// console.log(4 - '2');
// console.log('4px' - 2);
// console.log(7/0);
// console.log(' -9\n' + 5);
// console.log(' -9\n' - 5);
// console.log(5 && 2);
// console.log(2 && 5);
// console.log(0 || 5);
// console.log(5 || 0);
// console.log(!!NaN);
// console.log(!!undefined);
// console.log(!!null);
// console.log(!!0);
// console.log(!!0);
// console.log('\n0\n ' == 0);
// console.log('\n0\n ' === 0);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log(null == '\n0\n ');
// console.log(+null == +'\n0\n ');

var user = {
	firstName: 'Vasyl',
	number: 777,
	toString: function(){
		return 'firstName' + ' ' + this.firstName;
	},
	valueOf: function() {
		return this.number;
	}
};
alert (user);
console.log (user - 1);

alert(new Date);
alert(new Date - '1');

var value = new Boolean(true);
if (value) {
	alert ('ok');
}
alert(new Date(0));

//sum(1)(2) == 3
function sum(a) {
	var currentSum = a;
	function tempVal(b) {
		currentSum += b;
		return tempVal;
	};
	tempVal.toString = function(){
		return currentSum;
	};
	return tempVal;
};

console.log(sum(1)(2));
