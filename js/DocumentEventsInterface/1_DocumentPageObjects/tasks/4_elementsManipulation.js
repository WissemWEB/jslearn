"use strict";
// TASK 2
// Напишите полифилл для метода remove для старых браузеров.

// Вызов elem.remove():

// Если у elem нет родителя – ничего не делает.
// Если есть – удаляет элемент из родителя.
// var elem = document.body.children[0];
// console.log(elem);
// elem.remove();
// var elem = document.body.children[0];
// console.log(elem);
if (!Element.prototype.remove) {
    Element.prototype.remove = function remove() {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }
// console.log(Element.prototype.remove);
var elem = document.getElementById('removalTest');
elem.remove(); //tested in iExplorer 8

//TASK3

// Напишите функцию insertAfter(elem, refElem), которая добавит elem после узла refElem.

// <div>Это</div>
// <div>Элементы</div>

// <script>
//   var elem = document.createElement('div');
//   elem.innerHTML = '<b>Новый элемент</b>';

//   function insertAfter(elem, refElem) {  ваш код  }

//   var body = document.body;

//   // вставить elem после первого элемента
//   insertAfter(elem, body.firstChild); // <--- должно работать

//   // вставить elem за последним элементом
//   insertAfter(elem, body.lastChild); // <--- должно работать
// </script>

var elem2 = document.createElement('div');
elem.innerHTML = '<b>Новый элемент</b>';
function insertAfter(elem, refElem) {
	refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

var body = document.body;

  // вставить elem после первого элемента
  insertAfter(elem, body.firstChild); // работает

  // вставить elem за последним элементом
  insertAfter(elem, body.lastChild); //работает

  //TASK 4

//   Напишите функцию removeChildren, которая удаляет всех потомков элемента.

// <table id="table">
//   <tr>
//     <td>Это</td>
//     <td>Все</td>
//     <td>Элементы DOM</td>
//   </tr>
// </table>

// <ol id="ol">
//   <li>Вася</li>
//   <li>Петя</li>
//   <li>Маша</li>
//   <li>Даша</li>
// </ol>

// <script>
//   function removeChildren(elem) { /* ваш код */ }

//   removeChildren(table); // очищает таблицу
//   removeChildren(ol); // очищает список
// </script>

function removeChildren(elem) {
	while (elem.firstChild) {
		elem.removeChild(elem.firstChild);
	}
}

// removeChildren(table);
removeChildren(ol);

// TASK 5
// Напишите интерфейс для создания списка.

// Для каждого пункта:

// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте пункт и добавляйте его к UL.
// Процесс прерывается, когда пользователь нажимает ESC или вводит пустую строку.
// Все элементы должны создаваться динамически.

// Если посетитель вводит теги – пусть в списке они показываются как обычный текст.


while (true) {
	var data = prompt("Enter text for HTML element", "enter text here");
	if (!data) {
		break;
	}
	var newLi = document.createElement('li');
	var text = document.createTextNode(data);
	newLi.appendChild(text);
	document.getElementById('task5').appendChild(newLi);
}

//TASK 6
// Напишите функцию, которая создаёт вложенный список UL/LI (дерево) из объекта.

// Например:

// var data = {
//   "Рыбы": {
//     "Форель": {},
//     "Щука": {}
//   },

//   "Деревья": {
//     "Хвойные": {
//       "Лиственница": {},
//       "Ель": {}
//     },
//     "Цветковые": {
//       "Берёза": {},
//       "Тополь": {}
//     }
//   }
// };

// Синтаксис:

// var container = document.getElementById('container');
// createTree(container, data); // создаёт



var data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {
      	"Высокая": {},
      	"Низкая": {} 
      },
      "Тополь": {}
    }
  }
};

// var parentTask6 = document.getElementById("task6");
// for (var key in data) {
// 	var li = document.createElement('li');
// 	var text = document.createTextNode(key)
// 	li.appendChild(text);
// 	parentTask6.appendChild(li);
// }

var container = document.getElementById('container');
createTree(container, data);

function createTree(container, data) {
	container.appendChild(createTreeDom(data));
}

function createTreeDom(obj) {
	if (isEmpty(obj)) return;

	var ul = document.createElement('ul');

	for (var key in obj) {
		var li = document.createElement('li');
		li.innerHTML = key;
		ul.appendChild(li);
		var childUl = createTreeDom(obj[key]);
		if (childUl) {
			li.appendChild(childUl);
		};
	}

	return ul;
}

function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

// TASK7
var divTask7 = document.getElementById('task7');
var allLis = divTask7.querySelectorAll('li');

for (var i = 0; i < allLis.length; i++) {
	
	// var childrenUls = allLis[i].getElementsByTagName('ul'); 
	var childrenUls = allLis[i].querySelectorAll('ul>li'); 
	
	if (childrenUls.length > 0) {
		var liData = allLis[i].firstChild.data;
		liData += " "  + "[" + childrenUls.length + "]";
		allLis[i].firstChild.data = liData;
	};
}
