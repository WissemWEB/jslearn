"use strict";
var sayHiMixin = {
	sayhi: function() {
		console.log('Hi ' + this.name);
	},
	sayBye: function() {
		console.log('Hi ' + this.name);
	}
};

function User(name) {
	this.name = name;
}

for (var key in sayHiMixin) {
	User.prototype[key] = sayHiMixin[key];
};

var user = new User('Vasyl');

user.sayhi();

//Примеси при работе с событиями

var eventMixin = {

  /**
   * Подписка на событие
   * Использование:
   *  menu.on('select', function(item) { ... }
  */
  on: function(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  /**
   * Прекращение подписки
   *  menu.off('select',  handler)
   */
  off: function(eventName, handler) {
    var handlers = this._eventHandlers && this._eventHandlers[eventName];
    if (!handlers) return;
    for(var i=0; i<handlers.length; i++) {
      if (handlers[i] == handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  /**
   * Генерация события с передачей данных
   *  this.trigger('select', item);
   */
  trigger: function(eventName /*, ... */) {

    if (!this._eventHandlers || !this._eventHandlers[eventName]) {
      return; // обработчиков для события нет
    }

    // вызвать обработчики
    var handlers = this._eventHandlers[eventName];
    for (var i = 0; i < handlers.length; i++) {
      handlers[i].apply(this, [].slice.call(arguments, 1));
    }

  }
};


