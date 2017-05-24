"use strict";
function Machine(power) {
	this._power = power;
	this._enabled = false;
	this.enable = function() {
		this._enabled = true;
		// return enabled;
	};
	this.disable = function() {
		this._enabled = false;
		// return enabled;
	};
}

function CoffeMachine(power) {
	Machine.apply(this, arguments);
	var waterAmount = 0;
	// this.enable();
	this.setWaterAmount = function(amount) {
		waterAmount = amount;
	};

	this.getWaterAmount = function() {
		return waterAmount;
	};

	// this.enable();
	console.log(this._enabled);
	console.log(this._power);
}

var coffeMachine = new CoffeMachine(10000);
console.log(coffeMachine.enable());
console.log(coffeMachine.disable());
coffeMachine.setWaterAmount(300);
console.log(coffeMachine.getWaterAmount());

var coffeMachineTest = new CoffeMachine(20000);
console.log(coffeMachineTest._enabled);


//ПЕРЕОПРЕДЕЛЕНИЕ МЕТОДОВ
function CoffemachineWithOwnMethod(power) {
	Machine.call(this, arguments);

	var parentEnable = this.enable;
	this.enable = function() {
		parentEnable.call(this);
		this.run();	
	};

	this.run = function() {
		alert ('кофе готов');
	};
}

var coffemachineWithOwnMethod = new CoffemachineWithOwnMethod(10000);
coffemachineWithOwnMethod.enable();

function CoffeMachine(power) {
	Machine.apply(this, arguments);
	var waterAmount = 0;
	// this.enable();
	this.setWaterAmount = function(amount) {
		waterAmount = amount;
	};

	this.getWaterAmount = function() {
		return waterAmount;
	};

	// this.enable();
	console.log(this._enabled);
	console.log(this._power);

}

function Fridge(power, temperature) {	
	
	Machine.call(this, arguments);
	
	this.setTemperature = function(value) {
		temperature = value;
	}
	this.getTemperature = function() {
		return temperature;
	};

}

var fridge1 = new Fridge(5000, -20);

console.log(fridge1.getTemperature());
fridge1.setTemperature(-10);
console.log(fridge1.getTemperature());

// TASKS
// Запускать только при включённой кофеварке
// важность: 5
// В коде CoffeeMachine сделайте так, чтобы метод run выводил ошибку, если кофеварка выключена.

// В итоге должен работать такой код:

// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.run(); // ошибка, кофеварка выключена!
// А вот так – всё в порядке:

// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.enable();
// coffeeMachine.run(); // ...Кофе готов!

function CoffeMachineTask1(power) {
	Machine.apply(this, arguments);
	var waterAmount = 0;
	// this.enable();
	this.setWaterAmount = function(amount) {
		waterAmount = amount;
	};

	this.getWaterAmount = function() {
		return waterAmount;
	};

	function onReady(){
		alert('Кофе готов');
	}

	this.run = function() {
		if (!this._enabled) {
			throw 'кофеварка выключена';
		}
	setTimeout(onReady, 1000);	
	};
	// this.enable();
	// console.log(this._enabled);
	// console.log(this._power);
}

var coffeeMachineTask1 = new CoffeMachineTask1(10000);
coffeeMachineTask1.enable();
coffeeMachineTask1.run();