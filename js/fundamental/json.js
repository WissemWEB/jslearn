"use strict";
// var user = {
// 	name: "Vasyl",
// 	surname: 'Semikhov',
// 	sayHi: function () {
// 		return 'hi' + ' ' + name +  ' ' + surname;	
// 	}
// }

var User = function(name, surname) {
	this.name = name;
	this.surname = surname;
	this.sayHi = function() {
		return 'Hi' + ',' + ' ' + this.name + ' ' + this.surname;
	}
}

var user = new User('Vasyl', 'Semikhov');
var user1 = new User('Alona', 'Boiko');
console.log(user.name);
console.log(user.sayHi());
var test = user.sayHi.bind(user1);
console.log(test());

var jsonUser = JSON.stringify(user);
var undoJsonUser = JSON.parse(jsonUser);
console.log(jsonUser); 
console.log(undoJsonUser); 

//TASKS

//Превратите объект leader из примера ниже в JSON:
// var leader = {
//   name: "Василий Иванович",
//   age: 35
// };
// После этого прочитайте получившуюся строку обратно в объект.

var leader = {
  name: "Василий Иванович",
  age: 35
};
var leaderToJson = JSON.stringify(leader);
var undoLeaderToJson = JSON.parse(leaderToJson);
console.log(leaderToJson);
console.log(undoLeaderToJson);
