"use strict";
function User(data) {
	User.count++;
	this.name = data.name;
	this.surname = data.surname;
	this.patronym = data.patronym;
	// this.showFullname = function(){
	// 	return this.name + ' ' + this.surname;
	// }
}
function showFullname(firstPart, lastPart){
	return this[firstPart] + ' ' + this[lastPart];
}
User.showCount = function(){
	return this.count;
}
// User.showFullname = function(){
// 	return this.name + ' ' + this.surname;
// }
User.count = 0;
var user = new User({name: 'Vasyl', surname: 'Semikhov', patronym: 'Sergeevich'});
new User({name: 'Vasyl', surname: 'Semikhov'});
new User({name: 'Vasyl', surname: 'Semikhov'});
new User({name: 'Vasyl', surname: 'Semikhov'});
new User({name: 'Vasyl', surname: 'Semikhov'});
alert(User.count);
user.count = 0;
alert(user.count);
alert (user.name);
alert (user.surname);
// console.log(user.showFullname());
alert(showFullname.call(user, 'name', 'patronym'));


