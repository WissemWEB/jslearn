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

console.log(document.head);
console.log(document.documentElement.childNodes[0]); //head
console.log(document.documentElement.childNodes[1]); //text
console.log(document.documentElement.childNodes[2]); //body
console.log(document.documentElement.lastChild); //
console.log(document.documentElement.lastChild.lastChild); //

