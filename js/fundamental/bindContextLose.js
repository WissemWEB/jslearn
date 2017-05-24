'use strict';
// var user = {
// 	firstName: "Vasyl",
// 	sayHi: function() {
// 		// return this.firstName;
// 		console.log(this.firstName);
// 	}
// }
// // setTimeout(user.sayHi, 2000);
// setTimeout(function() {
// 	console.log(user.sayHi());
// }, 1000);

// function bind(func, context) {
// 	return function() {
// 		return func.apply(context, arguments);
// 	}
// } 

// // function f() {
// // 	return this;
// // }
// // var g = bind(f, 'Context');
// // console.log(g());
// setTimeout(bind(user.sayHi, user), 2000);

var userTest = {
	name: 'Vasyl',
	surname: 'Semikhov',
	showFullname: function(a, b) {
		alert(this.name + ' ' + this.surname + a + b); 
	}
}

var userTest2 = {
	name: 'Alona',
	surname: 'Boiko'
}
var showFullnameWrapper = userTest.showFullname.bind(userTest2, 2, 3);
setTimeout(showFullnameWrapper, 2000);