"use strict";
// var str1 = "A CLASH OF KINGS";
// var str2 = "a an of the";
// function titleCase(title, minorWords) {
	
// 	var arrTitle = title.toLowerCase().split(' ');
// 	arrTitle[0] = arrTitle[0].charAt(0).toUpperCase() + arrTitle[0].slice(1);
// 	if (minorWords != undefined) {
// 		var arrMinor = minorWords.toLowerCase().split(' ');
// 			for (var i = 1; i < arrTitle.length; i++) {
// 				arrTitle[i] = arrTitle[i].charAt(0).toUpperCase() + arrTitle[i].slice(1);
// 				for (var j = 0; j < arrMinor.length; j++){
// 					if (arrTitle[i].toLowerCase() === arrMinor[j]) {
// 						arrTitle[i] = arrTitle[i].charAt(0).toLowerCase() + arrTitle[i].slice(1);
// 					}
// 				}
// 			}
// 	}
// 	else {
// 		for (var i = 1; i < arrTitle.length; i++) {
// 			arrTitle[i] = arrTitle[i].charAt(0).toUpperCase() + arrTitle[i].slice(1);
// 		}
// 	}
// 	return arrTitle.join(' ');
// }
// // titleCase(str1, str2);
// console.log(titleCase(str1));
var user =  {
	name: "vasya",
	number: 7,
	test : function() { 
		return "hi " + this.name;
	},
	toString: function() {
		return 'строчное преобразование'  + this.name;
	},
	valueOf: function() {
		return this.number;
	}

}
var admin = {
	name: "petya"
}

function showName() {
	return this.name;
}
user.f = showName;
admin.f = showName;

console.log(user.f());
console.log(admin['f']());
function test(){
	"use strict";
	return this;
}
console.log(test());
console.log(user.test());
console.log(user);
var user1 = {

  firstName: 'Василий',

  toString: function() {
    return 'Пользователь ' + this.firstName;
  }
};
// alert(user);
// alert(+user);
// console.log(user1);
// console.log(new Date);

// var objStr = user;
// alert ('objStr' + objStr);
// alert (Date(0));
// alert (typeof(+new Date()));
// alert (new Date(0) - 1);
// var arr = [1,2,3];
// alert (arr + 1);
// alert ([[0]],[0],[0]);
// console.log ([[0]],[1]);

// var a  = {
// 	prop1: 'prop_a1',
// 	prop2: 'prop_a2',

// };
// var b = a;
// console.log (b.prop1);
// console.log (a.prop1);
// a.foo = function () {
// 	return this.prop2;
// }
// console.log(b.foo());

// var a = {'1':2, 2:3, 3:4};
// var b = 1;
// console.log(typeof(a));
// // console.log( a['1'] );
// var obj = {
// 	name: "Vasya",
// 	toString: function () {
// 		return 2;
// 	}, 
// 	// valueOf: function () {
// 	// 	return 1;
// 	// }
// }
// function sum(a){
// 	var currentSum = a;
// 	var f = function(b){
// 		return a+b;
// 	}
// 	return f;
// }
// alert(sum(1)(2)(3));

// function User(name) {
// 	this.name = name;
// 	this.sayHi = function() {
// 		alert("My name is " + this.name);
// 	};
// }
// var wissem = new User('Wasilij');
// wissem.sayHi();
// console.log(wissem.name);

// function UserFullName(firstName, lastName) {
// 	var phrase = "HI ";
// 	function getFullName(){
// 		return firstName + " " + lastName;
// 	};
// 	this.sayHi = function(){
// 		return phrase + getFullName();
// 		} 
// }
// var newUser = new UserFullName("Vasyl","Semikhov");
// console.log(newUser.sayHi());

// function Calculator(){
// 	this.read = function() {
// 		this.a = prompt('Enter first value','');
// 		this.b = prompt('Enter second value','');
// 	};
// 	this.sum = function(){
// 		return +this.a + +this.b;
// 	};
// 	this.mul = function(){
// 		return +this.a * +this.b;
// 	};
// }
// var calculator = new Calculator();
// calculator.read();
// console.log("The result of Sum a and b is " + calculator.sum());
// console.log("The result of Mul a and b is " + calculator.mul());

function Accumulator(startingValue) {
	this.value = startingValue;
	this.read = function() {
		this.value += +prompt('Enter value you want to add: ', 0);
	}
}
var accumulator = new Accumulator(2);
accumulator.read();
accumulator.read();
console.log(accumulator.value);

// function Calculator() {
	
// 	this.calculate = function(str){
// 		this.str = str;
// 		var arr = (this.str).split(' ');
// 		return arr[1] == "+" ? +arr[0] + +arr[2] : +arr[0] - +arr[2];
// 	}
// }
// var calc = new Calculator;
// console.log(calc.calculate("3 - 7"));

// var powerCalc = new Calculator;
// powerCalc.addMethod("*", function(a, b) {
//   return a * b;
// });
// powerCalc.addMethod("/", function(a, b) {
//   return a / b;
// });
// powerCalc.addMethod("**", function(a, b) {
//   return Math.pow(a, b);
// });

// var result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// "use strict";
function Calculator() {
	
	var methods = {};
	this.addMethod = function(op, func) {
		methods[op] = func;
	};
	this.calculate = function(str) {
		// this.str = str;
		var arr = str.split(' ');
		var result = methods[arr[1]](+arr[0], +arr[2]);
		return result;
	};
}
var calc = new Calculator;
console.log(calc.addMethod("*",function(a,b){ return a*b}));
console.log(calc.addMethod("/",function(a,b){ return a/b}));
console.log(calc.addMethod("+",function(a,b){ return a + b}));
console.log(calc.addMethod("**",function(a,b){ return Math.pow(a, b);}));
console.log(calc.methods);
console.log(calc.calculate("2 ** 3"));
console.log(calc.calculate("2 + 3"));
console.log(calc.calculate("2 * 3"));

function User(name, surname, age) {
	this.name = name;
	this.surname = surname;
	this.age = age;
}
var user2 = new User("Вася","Петров", 30);
Object.defineProperty(user2, "surname", {
	enumerable: false
});
Object.defineProperty(user2, "fullName", {
	get: function() {
		return this.name + ' ' + this.surname;
	},
	set: function(value) {
		var split = value.split(' ');
		this.name = split[0];
		this.surname = split[1];
	}
});
console.log(user2.name);
console.log(user2.surname);
console.log(user2.fullName);
user2.fullName = 'Петя Иванов';
console.log(user2.name);
console.log(user2.surname);
console.log(user2.fullName);
var user3  = {
	name: "Vasyl",
	surname: "Semikhov",
	get fullName() {
		return this.name + ' ' + this.surname;
	},
	set fullName(value) {
		var split = value.split(' ');
		this.name = split[0];
		this.surname = split[1];
	}
};

console.log(user3.fullName);
user3.fullName = "Fuckin Shit";
console.log(user3.fullName);
console.log(Object.keys(user2));
console.log(Object.getOwnPropertyNames(user2));
console.log(Object.getOwnPropertyDescriptor(user2, "name"));
var descriptor = Object.getOwnPropertyDescriptor(user2, "name");
// console.log(descriptor);
delete descriptor.value;
console.log(descriptor);
console.log(user2.name);

// var vasya = new User("Василий Попкин");

// // чтение firstName/lastName
// alert( vasya.firstName ); // Василий
// alert( vasya.lastName ); // Попкин

// // запись в lastName
// vasya.lastName = 'Сидоров';

// alert( vasya.fullName ); // Василий Сидоров

function UserNew (fullName) {
	this.fullName = fullName;
}
var vasya = new UserNew("Vasyl Semikhov");

Object.defineProperty(vasya, "firstName", {
	get: function() {
		return this.fullName.split(' ')[0];
	},
	set: function(firstName){		
		this.fullName = firstName + " " + this.fullName.split(' ')[1];
	}
});
Object.defineProperty(vasya, "lastName", {
	get: function() {
		return this.fullName.split(' ')[1];
	},
	set: function(lastName){
		var split = this.fullName.split(' '); 
		this.fullName = split[0] + " " + lastName;
	}
});
console.log(vasya.firstName);
console.log(vasya.lastName);
console.log(vasya.fullName);
vasya.firstName = "Petya";
console.log(vasya.fullName);
vasya.lastName = "Petrov";
console.log(vasya.fullName);
// console.log(vasya.firstName);
// var arr = ['1','2','3'].map(parseInt);
// console.log(arr);
function Article() {
	Article.count++;
	this.created = new Date();
	Article.last = this.created;
}
Article.showCount = function(){
	return this.count;
}
Article.showStats = function(){
	return 'Created:' + ' ' + this.count + ' ' + 'objects' + '.'+ ' ' + 'last on:' + ' ' + this.last; 
}

Article.count = 0;
var newObj = new Article();
var newObj2 = new Article();
console.log(Article.showStats());
var newObj3;
setTimeout((function() {newObj3 = new Article();})(), 5000);
console.log(Article.showStats());

function UserNew1() {
	this.sayHi = function(){
		return this.name;
	}
}
UserNew1.createAnonymous = function(){
	var user = new UserNew1;
	user.name = 'Anonymous';
	return user;
}

UserNew1.createFromData = function(userData){
	 var user = new UserNew1;
	 user.name = userData.name;
	 user.age = userData.age;
	 return user;
}
var test1 = UserNew1.createAnonymous();
var test2 = UserNew1.createFromData({name: 'Vasyl', age: 30});
console.log(test1.sayHi());
console.log(test2.sayHi());




