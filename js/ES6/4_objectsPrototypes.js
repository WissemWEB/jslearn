'use strict';
// let name = 'Vasyl';
// let surname = 'Semikhov';
// let isAdmin = true;

// let user = {
// 	name,
// 	surname,
// 	isAdmin
// };

// console.log(user);
// console.log(JSON.stringify(user));

// let propName = 'firstName';
// let user2 = {
// 	[propName]:'Vasyl'
// };

// console.log(user2);
// console.log(JSON.stringify(user2));

// let a = 'my';
// let b = 'green';
// let c = 'crocodile';

// let user3 = {
// 	[(a + b + c).toLowerCase()]: 'Vasyl'
// }

// console.log(user3);
// console.log(JSON.stringify(user3));

// let visitor = {name: 'Vasyl', surname: 'Semikhov'};
// let admin = {name: 'Alona', isAdmin: true};
// let boss = Object.assign({}, visitor, admin);
// console.log(boss);
// delete(admin.name);
// delete(visitor.name);
// console.log(boss);
// // console.log(visitor);
// // console.log(admin);

let user4 = {
	name: 'Vasyl',
	surname: 'Semikhov',
	get fullName() {
		return `${this.name} ${this.surname}`;
	},
	set fullName(fullname) {
		let arr = fullname.split(' ');
		this.name = arr[0];
		this.surname = arr[1];
	}
};

console.log(user4.fullName);
user4.fullName = "Alona Boiko";
console.log(user4.fullName);

// var person = {
//   surname: "John",
//   lastname: "Doe",
//   get fullname() {
//     return this.surname + " " + this.lastname;
//   },
//   set fullname(fullname) {
//     fullname = fullname.split(' ');
//     this.surname = fullname[0];
//     this.lastname = fullname[1];
//   }
// };

// console.log(person.fullname); // "John Doe"
// person.fullname = "Jane Roe";
// console.log(person.surname); // "Jane"
// console.log(person.lastname); // "Roe"