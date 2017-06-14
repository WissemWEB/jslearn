// 'use strict';

// setTimeout(function() {setBodyColor('red')}, 1000);
// setTimeout(function() {setBodyColor('white')}, 2000);

function setBodyColor(color) {
	document.body.style.background = color;
}



// for (var i = 0; i <= document.body.childNodes.length; i++) {
// 	console.log(document.body.childNodes[i]);
// }

console.log(document.head);
console.log(document.documentElement.childNodes[0]); //head
console.log(document.documentElement.childNodes[1]); //text
console.log(document.documentElement.childNodes[2]); //body
console.log(document.documentElement.lastChild); //
console.log(document.documentElement.lastChild.lastChild); //

var elems = document.documentElement.childNodes;
[].forEach.call(elems, function(elem) {
	console.log(elem);
}); 

console.log(document.documentElement.children);

// TASK1

var table = document.getElementById('table').children[0];

for (var i = 0; i < table.rows.length; i++) {
	table.rows[i].cells[i].style.backgroundColor = 'red';
};


//Поиск: getElement* и querySelector* и не только
document.getElementById('content').style.backgroundColor = 'red';
console.log(document.getElementById('content').children[0].innerHTML);
console.log(window['content-holder']);

//query selector
console.log(document.querySelectorAll('ul>li:last-child')[0]);

// TASKS

// Task1
console.log(document.getElementById('age-table').getElementsByTagName('label'));
console.log(document.getElementById('age-table').getElementsByTagName('td')[0]);
console.log(document.getElementsByTagName('form')[1]);
console.log(document.querySelector("form[name='search']"));
console.log(document.querySelector("form[name='search']").querySelector("input[name='search']"));
console.log(document.getElementsByName("info[0]"));
console.log(document.querySelector("form[name='search-person'] [name='info[0]']"));

console.log(document.body);
console.dir(document.body);



