'use strict';
// TASKS

//*****TASK1*****
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
			throw new Error('кофеварка выключена');
		}
	timerId = setTimeout(onReady, 1000);	
	};
	
}

// var coffeeMachineTask1 = new CoffeMachineTask1(10000);
// coffeeMachineTask1.enable();
// coffeeMachineTask1.run();

//*****TASK2*****
// Когда кофеварку выключают – текущая варка кофе должна останавливаться.

// Например, следующий код кофе не сварит:

// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.enable();
// coffeeMachine.run();
// coffeeMachine.disable(); // остановит работу, ничего не выведет

function CoffeeMachineTask2(power) {
	Machine.apply(this, arguments);
	var waterAmount = 0;
	var timerId;
	// this.enable();
	this.setWaterAmount = function(amount) {
		waterAmount = amount;
	};

	this.getWaterAmount = function() {
		return waterAmount;
	};

	function onReady(){
		console.log('Кофе готов');
	}

	this.run = function() {
		if (!this._enabled) {
			throw new Error('кофеварка выключена');
		}
		timerId = setTimeout(onReady, 1000);	
	};

	var parentDisable = this.disable;

	this.disable = function() {
		parentDisable.call(this);
		clearTimeout(timerId);
	};
	
	
}

var coffeeMachineTask2 = new CoffeeMachineTask2(10000);

coffeeMachineTask2.enable();
console.log(coffeeMachineTask2._enabled);

coffeeMachineTask2.disable();
console.log(coffeeMachineTask2._enabled);
coffeeMachineTask2.enable();
coffeeMachineTask2.run();
// coffeeMachineTask2.disable(); // остановит работу, ничего не выведет

//*****TASK3*****
//унаследуйте холодильник
// Создайте класс для холодильника Fridge(power), наследующий от Machine, с приватным свойством food и методами addFood(...), getFood():

// Приватное свойство food хранит массив еды.
// Публичный метод addFood(item) добавляет в массив food новую еду, доступен вызов с несколькими аргументами addFood(item1, item2...) для добавления нескольких элементов сразу.
// Если холодильник выключен, то добавить еду нельзя, будет ошибка.
// Максимальное количество еды ограничено power/100, где power – мощность холодильника, указывается в конструкторе. При попытке добавить больше – будет ошибка
// Публичный метод getFood() возвращает еду в виде массива, добавление или удаление элементов из которого не должно влиять на свойство food холодильника.
// Код для проверки:

// var fridge = new Fridge(200);
// fridge.addFood("котлета"); // ошибка, холодильник выключен
// Ещё код для проверки:

// // создать холодильник мощностью 500 (не более 5 еды)
// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("котлета");
// fridge.addFood("сок", "зелень");
// fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды
// Код использования холодильника без ошибок:

// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("котлета");
// fridge.addFood("сок", "варенье");

// var fridgeFood = fridge.getFood();
// alert( fridgeFood ); // котлета, сок, варенье

// // добавление элементов не влияет на еду в холодильнике
// fridgeFood.push("вилка", "ложка");

// alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье
// Исходный код класса Machine, от которого нужно наследовать:

// function Machine(power) {
//   this._power = power;
//   this._enabled = false;

//   var self = this;

//   this.enable = function() {
//     self._enabled = true;
//   };

//   this.disable = function() {
//     self._enabled = false;
//   };
// }

//РЕШЕНИЕ

function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
	Machine.apply(this, arguments);
	var maxFoodCount = power/100;
	var food = [];
	var parentDisable = this.disable;

	this.disable = function() {
		if (food.length) {
			throw new Error('В холодильнике есть еда');
		}
		else {
			parentDisable();
		};
	
	};
	// this.test = function() {
	// 	console.log(this.getFood().length);
	// };

	this.addFood = function() {
		if (!this._enabled) {
			throw new Error('Холодильник выключен');
		}

		for (var i = 0; i < arguments.length; i++) {
			if (food.length < maxFoodCount) {
				food.push(arguments[i]);
			}
			else {
				throw new Error('Максимально допустимое количество еды в холодильнике' + ' ' + maxFoodCount);
			};
		};

	};

	this.getFood = function() {
		return food.slice(); //копируем food в новый массив, чтоб нельзя было его изменить извне 
	};

	this.filterFood = function(f) {
		return food.filter(f).slice();
	};

	this.removeFood = function(item) {
		var idx = food.indexOf(item); 
		if (idx != -1) {
			food.splice(idx, 1);
		};
		// else throw "нет такого элемента";
	};
}

// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("apple", "milk");
// fridge.addFood("avocado", "orange");
// console.log(fridge.getFood());
// var fridgeFood = fridge.getFood();
// fridgeFood.push('ложка', 'вилка');
// console.log(fridgeFood);
// console.log(fridge.getFood());

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});


// var arr = fridge.filterFood(function(item){
// 	return item.calories < 100;
// });
// console.log(arr);
// console.log( fridge.getFood() );
// // var arr = fridge.getFood();
// arr.forEach( function(item) {
// 	console.log(item.title);
// });

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

dietItems.forEach(function(item) {
  console.log( item.title ); // сок, зелень
  fridge.removeFood(item);
});

var food = fridge.getFood();
food.forEach(function(item) {
  console.log( item.title ); // сок, зелень
});

// fridge.removeFood('fuck');
// var arr = ["Я", "изучаю", "JavaScript"];
// console.log(arr.indexOf("Я"));
// console.log(arr.indexOf("изучаю"));
// arr.splice(2,1);
// console.log(arr);
// if (arr.length) {
// 	console.log(true);
// } else {
// 	console.log(false);
// }

//*****TASK*****
// Переопределите метод disable холодильника, чтобы при наличии в нём еды он выдавал ошибку.

// Код для проверки:

// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("кус-кус");
// fridge.disable(); // ошибка, в холодильнике есть еда
// В качестве исходного кода используйте решение предыдущей задачи.

var fridge1 = new Fridge(500);
fridge.enable();
fridge.addFood('кус-кус');
fridge.disable();
console.log(fridge._enabled);
// console.log(fridge.getFood());

// fridge.test();
// console.log(fridge.food.length);
