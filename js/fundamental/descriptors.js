//descriptors, getters, setters
'use strict'
var user = {
	name: 'Vasyl',
	surname: 'Semikhov',
	toString: function() {
		return this.name;
	},
	get fullName() {
		return this.name + ' ' + this.surname;
	},
	set fullName(value) {
		var split = value.split(' ');
		this.name = split[0];
		this.surname = split[1];
	}

};
Object.defineProperty(user, 'name', {writable: true, configurable: true, enumerable: true});
Object.defineProperty(user, 'toString', {enumerable: false});
// Object.defineProperty(user, 'fullName', {
// 	get: function() {
// 		return this.name + ' ' + this.surname; 
// 	},
// 	set: function(value) {
// 		var split = value.split(' ');
// 		this.name = split[0];
// 		this.surname = split[1];
// 	}, 
// 	enumerable: true
// });

for (var key in user) {
	console.log(key);
};
console.log(user.fullName);
user.fullName = 'Petro Ivanov';
console.log(user.fullName);
console.log(user.name);
console.log(user.surname);

function ProUser(name, birthday) {
	this.name = name;
	this.birthday = birthday;
	Object.defineProperty(this, 'age', {
		get: function() {
			var toDayYear = new Date().getFullYear();
			return toDayYear - this.birthday.getFullYear();
		}
	});
}	

var pete = new ProUser('Peter', new Date(1985, 08, 21));
console.log(pete.age);

var userTest = {};
Object.defineProperties(userTest, {
	'firstname': {
		value: 'Petro'
	},
	'surname': {
		value: 'Ivanov'
	},
	fullName: {
		get: function() {
			return this.firstname + ' ' + this.surname;
		}
	}
});

console.log(userTest.fullName);

console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));

var obj = {
	test: 5
};
var descriptor = Object.getOwnPropertyDescriptor(obj, 'test');
console.log(descriptor);
delete descriptor.value;
delete descriptor.writable;
descriptor.get = function() {
	return 'Превед';
};
delete obj.test;
Object.defineProperty(obj, 'test', descriptor);

console.log(descriptor);
console.log(obj.test);

//TASK 1
function TaskUser(fullName) {
	this.fullName = fullName;
	Object.defineProperties(this, {
		firstName: {
			get: function() {
				return this.fullName.split(' ')[0];
			},
			set: function(str) {
				this.fullName = str + ' ' + this.lastName;
			}
		},
		lastName: {
			get: function() {
				return this.fullName.split(' ')[1];
			},
			set: function(str) {
				this.fullName = this.firstName + ' ' + str;
			}
		}
	});
};
var vasya = new TaskUser('Василий Семихов');
console.log(vasya.lastName);
vasya.firstName = 'Pete';
vasya.lastName = 'Ivanov';
console.log(vasya.fullName);

