'use strict';
var newDiv = document.createElement("div");
newDiv.className = "new-div";
newDiv.innerHTML = "<strong>Новый див</strong>";
var parentElemBody = document.body;
// parentElem.appendChild(newDiv); //вставит в конец род. элемента
parentElemBody.insertBefore(newDiv, document.getElementById('elem'));
var newAlertDiv = document.createElement("div");
newAlertDiv.className = 'alert alert-success';
newAlertDiv.innerHTML = "<strong>Huurah!</strong> Thank you for reading this new message";
parentElemBody.insertBefore(newAlertDiv, parentElemBody.firstChild);

var newClonedDiv = newAlertDiv.cloneNode(true);
newClonedDiv.querySelector('strong').innerHTML = 'Huurah, div cloned';
parentElemBody.insertBefore(newClonedDiv, newAlertDiv);
setTimeout(function() {
	newClonedDiv.parentNode.removeChild(newClonedDiv);
}, 3000);

var newTextDiv = document.createElement("div");
newTextDiv.className = "alert alert-success";
document.body.appendChild(newTextDiv);
var text = prompt("Enter your message text", "they are <a> and <b>!");
newTextDiv.appendChild(document.createTextNode(text));

// TASKS

//TASK 1 
var elemTask1 = document.getElementById('elem');
alert(Element.prototype.remove);
// if(!Element.prototype.remove) {
// 	Element.prototype.remove = function() {
// 		// var parent = parentNode(this);
// 		if (this.parentNode) {
// 			this.parentNode.removeChild(this);
// 		}
// 	};
// }


