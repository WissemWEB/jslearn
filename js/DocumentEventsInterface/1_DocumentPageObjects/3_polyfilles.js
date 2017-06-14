'use strict';
var elem = document.getElementById('elem');
console.log(elem);
console.log(elem.getAttribute('about'));
elem.setAttribute('newAttr', 'testValue');
console.log(elem.getAttribute('newAttr'));
console.log(elem.about); //undefined
console.log(elem.getAttribute('about'));
console.log(elem.classList[0]);
console.log(elem.classList[1]);
console.log(elem.classList.contains('class1'));
console.log(elem.classList.contains('class2'));
console.log(elem.classList.contains('class3'));
elem.classList.add('class3');
console.log(elem.classList.contains('class3'));
elem.classList.remove('class3');
console.log(elem.classList.contains('class3'));
elem.classList.toggle('class3');
console.log(elem.classList.contains('class3'));
console.log(elem.getAttribute('data-user-location'));
console.log(elem.dataset.userLocation);





