'use strict';
function Article(name) {
	Article.count++;
	this.name = name;
}
Article.count = 0;
Article.showCount = function() {
	return this.count
};
// function Article(name) {
// 	Article.count++;
// 	Article.showCount = function() {
// 		return this.count;
// 	}
// 	this.name = name;
// }
// Article.count = 0;
var art = new Article('art1');
var art1 = new Article('art2');
var art2 = new Article('art3');
console.log(Article.count);
console.log(art.name);
console.log(art1.name);
console.log(art2.name);
console.log(Article.showCount());

//JOURNALS COMPARE BY DATE
function Journal(date) {
	this.date = date;
	this.formatDate = function(date) {
		return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
	};
	this.getTitle = function() {
		return "Date of this journal is" + " " + this.formatDate(this.date);
	};
}

Journal.compare = function(JournalA, JournalB) {
	return JournalA.date - JournalB.date;
};

var journals = [
	new Journal(new Date(2012, 0, 1)),
	new Journal(new Date(2011, 2, 1)),
	new Journal(new Date(2014, 0, 1))
];

function findMin(arr) {
	var min = 0;
	for (var i = 0; i < arr.length; i++) {
		if (Journal.compare(arr[min], arr[i]) > 0) {
			min = i;
		};
	};
	return arr[min];
};

console.log(findMin(journals).getTitle());


// var date = new Date(2012, 1, 1);
// console.log (date);
// console.log (date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear());

//CREATING OBJECT WITH FABRIC METHODS
function User() {
	this.sayHi = function() {
		return 'hi' + ' ' + this.name;
	};
}

User.createAnonymous = function() {
	var user = new User;
	user.name = 'Anonymous';
	return user;
}

User.createFromData = function(userData) {
	var user = new User;
	user.name = userData.name;
	user.age = userData.age;
	return user;
}

var guest = new User.createAnonymous();
var knownUser = new User.createFromData({name: 'Vasyl', age: 31});

console.log(guest.name);
console.log(guest.sayHi());
console.log(knownUser.name);
console.log(knownUser.age);
console.log(knownUser.sayHi());


/*----TASK----*/
// Добавить в конструктор Article:

// Подсчёт общего количества созданных объектов.
// Запоминание даты последнего созданного объекта.
// Используйте для этого статические свойства.

// Пусть вызов Article.showStats() выводит то и другое.

function TaskArticle() {
  TaskArticle.count++;
  this.created = new Date();
  TaskArticle.last = this.created;
}

TaskArticle.count = 0;

var article1 = new TaskArticle;
var article2 = new TaskArticle;
var article3 = new TaskArticle;

console.log(TaskArticle.count);

console.log(article1.created);
console.log(article2.created);
console.log(article3.created);

TaskArticle.showStats = function() {
	return 'Summary articles:' + ' ' + TaskArticle.count + ';' + ' ' + 'last:' + ' ' + TaskArticle.last + ';';
}
console.log(TaskArticle.showStats());




