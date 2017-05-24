'use strict';
//создаем кофеварку как пример
//Для расчёта времени на кипячение воды используется формула c*m*ΔT / power, где:

// c – коэффициент теплоёмкости воды, физическая константа равная 4200. WATER_HEAT_CAPACITY (константа)
// m – масса воды, которую нужно нагреть. waterAmount.
// ΔT – температура, на которую нужно подогреть, будем считать, что изначально вода – комнатной температуры 20°С, то есть до 100° нужно греть на ΔT=80.
// power – мощность.

function CoffeMachine(power) {
	this.power = power;
	this.waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
	var timerId;
	var self = this;

	function getBoilTime() {
		return WATER_HEAT_CAPACITY * self.waterAmount * 80 / self.power;
	}

	function onReady() {
		alert('your cup of coffe is done!');
	}
	
	this.run = function() { //запуск кофеварки
	 timerId = setTimeout(onReady, getBoilTime()); 
	}

	this.stop = function() { //остановить кофеварку
		clearTimeout(timerId);
	};

}

var coffeMachine = new CoffeMachine(100000);
coffeMachine.waterAmount = 200;

coffeMachine.run();
// coffeMachine.stop(); //останавливает кофеварку
// console.log(coffeMachine.getBoilTime.call(coffeMachine));
// cons	ole.log(coffeMachine.timerId);


