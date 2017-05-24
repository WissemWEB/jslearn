'use strict';
// var user1 = {
// 	name: 'Vasyl',
// 	sayHi: function () {
// 		return 'hi' + ' ' + this.name;
// 	}
// }
// console.log(user1.sayHi());

// var user2 = {
// 	name: 'Vasyl',
// 	sayHi: function () {
// 		return 'hi' + ' ' + this.name;
// 	}
// }
// var admin = user2;

// user2 = null;
// console.log(admin.sayHi());

// var user3 = {
// 	name: 'Petro',
// 	sayHi: function() {
// 		showName(this);
// 	}
// }

// function showName(nameObj) {
// 	alert(nameObj.name);
// }

// // console.log(user3.sayHi());
// user3.sayHi();

var user = {
	name: 'Vasyl',
	sayHi: function() {
		showName(this);
	}
}

function showName(receivedObj) {
	alert(receivedObj.name);
}

user.sayHi();

var admin = {name: 'Vasyl'};
var user = {name: 'Alex'};

function func() {
	return this.name;
}

admin.sayHi = func;
user.sayHi = func;

console.log(admin.sayHi());
console.log(user.sayHi());
console.log(user['sayHi']()); //не имеет значения через точку или скобки

//TASK CALCULATOR
var calculator = {
	read: function(){
		this.val1 = +prompt('Enter the 1st value', 0);
		this.val2 = +prompt('Enter the 2nd value', 0);
	},
	sum: function() {
		return this.val1 + this.val2;
	},
	mul: function() {
		return this.val1 * this.val2;
	}
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

//TASK LADDER
var ladder = {
	step: 0,
	stepUp: function() {
		this.step++;
	},
	stepDown: function() {
		this.step--;
	},
	showStep: function(){
		return this.step;
	}
};

ladder.stepUp();
ladder.stepUp();
ladder.stepDown();
console.log(ladder.showStep());

var ladderVer2 = {
	step: 0,
	stepUp: function() {
		this.step++;
		return this;
	},
	stepDown: function() {
		this.step--;
		return this;
	},
	showStep: function(){
		alert(this.step);
	}
};

ladderVer2.stepUp().stepUp().showStep();
// console.log(ladderVer2.showStep());

