'use strict';
console.log(document.body.nodeName);
console.log(document.body.tagName);
console.log(document.body.innerHTML);
console.log(document.querySelectorAll(".menu>ul>li")[0].innerHTML);
var header = document.getElementsByTagName('header')[0];
console.log(header.getElementsByTagName('p')[0]);
console.log(header.getElementsByTagName('p')[0].textContent);
