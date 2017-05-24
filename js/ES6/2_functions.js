'use strict';

let inc = x => x+1;
console.log(inc(2));
console.log(inc.name);
// var sayHi = function(name, surname) {
// 	return name + ' ' + surname;
// };

//rerwrite function in short view with =>

let sayHi = (name, surname) => name + ' ' + surname;
console.log(sayHi('Vasyl', 'Semikhov'));
let testFoo = () => {
	console.log('it works');
	console.log('it works');
	console.log('it works');
};
testFoo();
console.log( ((a,b) => a+b)(1,2) );
console.log( 
	(function(a,b) {
		return a + b;
	})(2,3)
);

let group = {
  title: "Наш курс",
  students: ["Вася", "Петя", "Даша"],
  showList: function() {
  	this.students.forEach(
  		student => {console.log(this.title + ' ' + student)}
  	);
  }
};

let user = {
  name: 'Vasyl',
  surname: 'Semikhov'
};

function sayHi2({name = 'Alona', surname = 'Boiko'}) {
  return name + ' ' + surname;
}

console.log(sayHi2(user));