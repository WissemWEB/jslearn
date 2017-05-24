'use strict';
// 1.Ограничить сколько в кофеварку воды можно влить.
// 2.Ограничить сколько из кофеварки воды можно вылить.
// 3.спрятать свойство wateramount от пользователя, сделать его приватным.
// 4.Сделать так чтоб можно было посмотреть сколько воды влито в кофеварку в данный момент

//Пример из предыдущей главы, который мы будеи переделывать.
//создаем кофеварку как пример
//Для расчёта времени на кипячение воды используется формула c*m*ΔT / power, где:

// c – коэффициент теплоёмкости воды, физическая константа равная 4200. WATER_HEAT_CAPACITY (константа)
// m – масса воды, которую нужно нагреть. waterAmount.
// ΔT – температура, на которую нужно подогреть, будем считать, что изначально вода – комнатной температуры 20°С, то есть до 100° нужно греть на ΔT=80.
// power – мощность.

function CoffeMachine(name, power, capacity) {
	this.power = power;
	this.name = name;
	var waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
	var timerId;
	var self = this;

	this.setWaterAmount = function(amount) {
		if (amount <= 0) {
			throw 'введите положительное значение';
		}
		if (amount > capacity) {
			throw 'слишком много воды. Нельзя залить больше чем ' + capacity + ' мл';
		}
		waterAmount = amount;
	};

	this.getWaterAmount = function() {
		return waterAmount;
	};

	function getBoilTime() {
		return WATER_HEAT_CAPACITY * waterAmount * 80 / self.power;
	}

	function onReady() {
		alert('your cup of coffe is well done by ' + name);
	}
	
	this.run = function() {
	 timerId = setTimeout(onReady, getBoilTime());
	};

	this.stop = function() {
		clearTimeout(timerId);
	};

}

var coffeMachine = new CoffeMachine('Philips', 100000, 500);
// coffeMachine.waterAmount = 200;
// coffeMachine.setWaterAmount(550);
// coffeMachine.setWaterAmount(-5);
coffeMachine.setWaterAmount(201);
console.log(coffeMachine.getWaterAmount());
coffeMachine.run();
// console.log(coffeMachine.waterAmount);
// coffeMachine.stop();
// console.log(coffeMachine.getBoilTime.call(coffeMachine));
// cons	ole.log(coffeMachine.timerId);

//ЕДИНЫЙ ГЕТТЕР-СЕТТЕР

function CoffeMachine1(name, power, capacity) {
	this.name = name;
	this.power = power;
	var waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
	var timerId;
	var self = this;

	// this.setWaterAmount = function(amount) {
	// 	if (amount <= 0) {
	// 		throw 'введите положительное значение';
	// 	}
	// 	if (amount > capacity) {
	// 		throw 'слишком много воды. Нельзя залить больше чем ' + capacity + ' мл';
	// 	}
	// 	waterAmount = amount;
	// }

	// this.getWaterAmount = function() {
	// 	return waterAmount;
	// }
	this.waterAmount = function(amount) {
		if (!arguments.length) {
			return waterAmount;
		}
		if (amount <= 0) {
			throw 'введите положительное значение';
		}
		if (amount > capacity) {
			throw 'слишком много воды. Нельзя залить больше чем ' + capacity + ' мл';
		}
		waterAmount = amount;
	}
	function getBoilTime() {
		return WATER_HEAT_CAPACITY * waterAmount * 80 / self.power;
	}

	this.showBoilTime = function() {
		console.log(getBoilTime());
	};

	function onReady() {
		alert('your cup of coffe is done by ' + name);
	}
	
	this.run = function() {
	 timerId = setTimeout(onReady, getBoilTime());
	};

	this.stop = function() {
		clearTimeout(timerId);
	};

}

var coffeMachine1 = new CoffeMachine1('Moulinex', 50000, 300);
coffeMachine1.waterAmount(299);
coffeMachine1.run();
console.log(coffeMachine1.waterAmount());
coffeMachine1.showBoilTime();

// TASKS

// 1 TASK
// ******
//Условие
// Напишите конструктор User для создания объектов:

// С приватными свойствами имя firstName и фамилия surname.
// С сеттерами для этих свойств.
// С геттером getFullName(), который возвращает полное имя.
// Должен работать так:

// function User() {
//   /* ваш код */
// }

// var user = new User();
// user.setFirstName("Петя");
// user.setSurname("Иванов");

// alert( user.getFullName() ); // Петя Иванов

//Решение
function User() {
	var name, surname;
	this.setFirstName = function(value) {
		name = value;
	}
	this.setSurname = function(value) {
		surname = value;
	}
	this.getFullName = function() {
		return name + ' ' + surname;
	}
}
var user = new User();
user.setFirstName('Vasyl');
user.setSurname('Semikov');
console.log(user.getFullName());

// 2 TASK
// ******
//Условие
// Добавьте кофеварке геттер для приватного свойства power, чтобы внешний код мог узнать мощность кофеварки.

// Исходный код:

// function CoffeeMachine(power, capacity) {
//   //...
//   this.setWaterAmount = function(amount) {
//     if (amount < 0) {
//       throw new Error("Значение должно быть положительным");
//     }
//     if (amount > capacity) {
//       throw new Error("Нельзя залить воды больше, чем " + capacity);
//     }

//     waterAmount = amount;
//   };

//   this.getWaterAmount = function() {
//     return waterAmount;
//   };

// }

//Решение
function CoffeeMachine2(power, capacity) {
  this.getPower = function() {
  	return power;
  }

  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  this.getWaterAmount = function() {
    return waterAmount;
  };

}

var coffeMachine2 = new CoffeeMachine2(50000, 300);
console.log(coffeMachine2.getPower());


//3 TASK
// Условие
// Добавьте кофеварке публичный метод addWater(amount), который будет добавлять воду.

// При этом, конечно же, должны происходить все необходимые проверки – на положительность и превышение ёмкости.

// Исходный код:

// function CoffeeMachine(power, capacity) {
//   var waterAmount = 0;

//   var WATER_HEAT_CAPACITY = 4200;

//   function getTimeToBoil() {
//     return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//   }

//   this.setWaterAmount = function(amount) {
//     if (amount < 0) {
//       throw new Error("Значение должно быть положительным");
//     }
//     if (amount > capacity) {
//       throw new Error("Нельзя залить больше, чем " + capacity);
//     }

//     waterAmount = amount;
//   };

//   function onReady() {
//     alert( 'Кофе готов!' );
//   }

//   this.run = function() {
//     setTimeout(onReady, getTimeToBoil());
//   };

// }
// Вот такой код должен приводить к ошибке:

// var coffeeMachine = new CoffeeMachine(100000, 400);
// coffeeMachine.addWater(200);
// coffeeMachine.addWater(100);
// coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
// coffeeMachine.run();


// Решение
function CoffeeMachine3(power, capacity) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  this.getWaterAmount = function() {
  	return waterAmount;
  };

  this.addWater = function(amount) {
  	if (amount < 0) {
  		throw 'Введите положительное значение';
  	}
  	if ((waterAmount + amount) > capacity ) {
  		throw 'Нельзя влить больше чем  ' + capacity;
  	}
  	return waterAmount+=amount;
  };

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    setTimeout(onReady, getTimeToBoil());
  };

}

var coffeeMachine3 = new CoffeeMachine3(100000, 400);
coffeeMachine3.addWater(200);
coffeeMachine3.addWater(100);
// coffeeMachine3.addWater(101);

console.log(coffeeMachine3.getWaterAmount());

// coffeeMachine3.addWater(300); // Нельзя залить больше, чем 400
coffeeMachine3.run();

//4 TASK
// Условие
// Обычно когда кофе готов, мы хотим что-то сделать, например выпить его.

// Сейчас при готовности срабатывает функция onReady, но она жёстко задана в коде:

// function CoffeeMachine(power, capacity) {
//   var waterAmount = 0;

//   var WATER_HEAT_CAPACITY = 4200;

//   function getTimeToBoil() {
//     return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//   }

//   this.setWaterAmount = function(amount) {
//     // ... проверки пропущены для краткости
//     waterAmount = amount;
//   };

//   this.getWaterAmount = function(amount) {
//     return waterAmount;
//   };

//   function onReady() {
//       alert( 'Кофе готов!' );
//     }

//   this.run = function() {
//     setTimeout(onReady, getTimeToBoil());
//   };

// }
// Создайте сеттер setOnReady, чтобы код снаружи мог назначить свой onReady, вот так:

// var coffeeMachine = new CoffeeMachine(20000, 500);
// coffeeMachine.setWaterAmount(150);

// coffeeMachine.setOnReady(function() {
//   var amount = coffeeMachine.getWaterAmount();
//   alert( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
// });

// coffeeMachine.run();
// P.S. Значение onReady по умолчанию должно быть таким же, как и раньше.

// P.P.S. Постарайтесь сделать так, чтобы setOnReady можно было вызвать не только до, но и после запуска кофеварки, то есть чтобы функцию onReady можно было изменить в любой момент до её срабатывания.
function CoffeeMachine4(power, capacity) {
  var onReady;
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };

  this.getWaterAmount = function(amount) {
    return waterAmount;
  };

  // function onReady() {
  //     alert( 'Кофе готов!' );
  //   }
  this.setOnReady = function(f) {
  	onReady = f;
  }
  this.run = function() {
    setTimeout(function(){
    	onReady();
    }, getTimeToBoil());
  };

}

var coffeeMachine4 = new CoffeeMachine4(20000, 500);
coffeeMachine4.setWaterAmount(150);

coffeeMachine4.setOnReady(function() {
  var amount = coffeeMachine4.getWaterAmount();
  alert( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
});

coffeeMachine4.run();

//TASK 5
//Из внешнего кода мы хотели бы иметь возможность понять – запущена кофеварка или нет.

// Для этого добавьте кофеварке публичный метод isRunning(), который будет возвращать true, если она запущена и false, если нет.

// Нужно, чтобы такой код работал:

// var coffeeMachine = new CoffeeMachine(20000, 500);
// coffeeMachine.setWaterAmount(100);

// alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

// coffeeMachine.run();
// alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

// coffeeMachine.setOnReady(function() {
//   alert( "После: " + coffeeMachine.isRunning() ); // После: false
// });

function CoffeeMachine5(power, capacity) {
  var inProcess = false;
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };

  this.getWaterAmount = function(amount) {
    return waterAmount;
  };

  function onReady() {
      alert( 'Кофе готов!' );
  }

  this.setOnReady = function(f) {
  	onReady = f;
  }

  this.run = function() {
  	inProcess = true;
    setTimeout(function(){
    	inProcess = false;
    	onReady();
    }, getTimeToBoil());
  };

  this.isRunning = function() {
  	return inProcess;
  };

}
var coffeeMachine5 = new CoffeeMachine5(20000, 500);
console.log( 'До: ' + coffeeMachine5.isRunning() ); // До: false

coffeeMachine5.run();
console.log( 'В процессе: ' + coffeeMachine5.isRunning() ); // В процессе: true

coffeeMachine5.setOnReady(function() {
  console.log( "После: " + coffeeMachine5.isRunning() ); // После: false
});