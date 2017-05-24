'use strict';
function Animal(name) {
	this.name = name;
	var speed = 0;

	this.run = function(value) {
		this.speed += value;
		var text = name + ' ' + 'running' + ';' + ' ' + "it's speed:" + '' + speed;
		console.log(text);
		return text;
	};

	this.stop = function() {
		speed = 0; 
		var text = name + ' ' + 'has stopped';
		console.log(text);
		return text;
	};

}

var gepard = new Animal('Gepard');
gepard.run(90);
gepard.run(10);
gepard.stop();

//теперь то же самое только с прототипом
function AnimalNew(name) {
	this.name = name;
	this.speed = 0;
}

AnimalNew.prototype.run = function(value) {
	this.speed += value;
	var text = this.name + ' ' + 'is' + ' ' +  'running' + ';' + ' ' + "it's speed:" + '' + this.speed;
	console.log(text);
	return text;
};

AnimalNew.prototype.stop = function() {
	this.speed = 0;
	var text = this.name + ' ' + 'has stopped';
	console.log(text);
	return text; 
};

var animalNew1 = new AnimalNew('Mouse');
animalNew1.run(5);
animalNew1.run(5);

var animalNew2 = new AnimalNew('Lion');
animalNew2.run(5);
animalNew2.run(5);

animalNew1.stop();
animalNew2.stop();

