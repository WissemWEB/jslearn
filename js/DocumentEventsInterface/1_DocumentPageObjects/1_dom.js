'use strict';

setTimeout(function() {setBodyColor('red')}, 1000);
setTimeout(function() {setBodyColor('white')}, 2000);

function setBodyColor(color) {
	document.body.style.background = color;
}

window.onload = function() {
	console.log(document.body);
};
console.log(document.head);

for (var i = 0; i <= document.body.childNodes.length; i++) {
	console.log(document.body.childNodes[i]);
}
	
