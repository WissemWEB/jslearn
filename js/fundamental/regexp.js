
/*RegExp*/
//регулярные выражения

'use strict';
function divider() {
	var divider = '\n ------------- \n\n'; //just divider for console
	console.log(divider);	
}


var str = "I love js";
var regexp1 = /js/;
var regexp2 = /Js/;
var regexp3 = /Js/i;
var regexp4 = /ov/g;
console.log(str.search(regexp1)); //search method only for RegExps. For substring we need to use indexOf
console.log(str.search(regexp2)); //search method only for RegExps. For substring we need to use indexOf
console.log(str.search(regexp3)); //search method only for RegExps. For substring we need to use indexOf
console.log(str.search(regexp4)); //search method only for RegExps. For substring we need to use indexOf

//match
var str = 'I love javascript JAVAscript';
var regexp = /JAVA(SCRIPT)/i;
var result = str.match(regexp);
console.log(result);
console.log(result[0]);
console.log(result[1]);
console.log(result.input);
console.log(result.index);

divider();

var regexp1 = /JAVA(SCRIPT)/gi;
var result1 = str.match(regexp1);
console.log(result1);
console.log(result1[0]);
console.log(result1[1]);
console.log(result1.length);

var str1 = 'split me please';
var result = str1.split(' ');
var result1 = str1.split(/ /);
console.log(result);
console.log(result1); //w RegExp

divider();

var str2 = 'replace me please';
var result = str2.replace(' ','-');// replace-me pelase
var result1 = str2.replace(/ /gi,'-'); //with RegExp is right! //replace-me-pelase 
var result2 = str2.replace(/ /gi,'$$');
var result3 = str2.replace(/ /gi,'$&');
var result4 = str2.replace(/ /gi,'$`');
var result5 = str2.replace(/ /gi,"$'");	
var result6 = str2.replace(/(replace) (me)/,'$2 jhkjhhjg $1');	
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);

divider();

var str = 'CSS4 standart is cool';
var result = str.match(/\w\w\w\d/);
console.log(result);

divider();

var str = "Hello Javascript";
var str1 = "Hello Java";
console.log(str.match(/\bjava\b/i));
console.log(str1.match(/java/i));

var telNum = '+38 (067) 238 58 74';
console.log(telNum.replace(/\D/g, '')); 

console.log('g()'.match(/g/));

console.log("Завтрак в 09:00".match(/\b\d\d:\d\d\b/));
console.log('Gop-stop'.match())
console.log('Gop stop'.match(/[go]/ig));
console.log('Exception 0xAF'.match(/x[0-9A-F][0-9A-F]/g));
console.log("Завтрак в 09:00".match(/[а-я]+/gi));

var str = "Солнце (the sun) встаёт в 6:00!";
console.log(str.match(/[\wа-яё]+/gi));
console.log(str.match(/[\d]+/gi));
console.log('alice15@gmail.com'.match(/[^A-Z\d\s]/gi));

var re = /\d\d[:-]\d\d/g;
console.log( "Завтрак в 09:00. Обед - в 21-30".match(re) ); // 09:00, 21-30
var telNum = '+38 (067) 238-58-74';
console.log(telNum.match(/\d{1,}/g));
console.log(telNum.match(/\d{1,2}/g));

console.log( "Мне не 123456, а 1234 года".match(/\d{3,5}/) );

var str = "color or colour";
console.log(str.match(/colou?r/gi));
console.log(str.match(/colou*r/gi));
console.log( "100 10 1".match(/\d0*/g) );
console.log( "100 10 1".match(/\d0+/g) );
console.log( "100 10 12.340 1".match(/\d+\.\d+/g) );

/*TASKS*/
//Троеточия
var reg = /\.{3,}/g;
console.log( "Привет!... Как дела?.....".match(reg) );

//найти все цвета в правильной хекс кодировке
var re = /#[a-zA-Z0-9]{6}/g;
var str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2";
console.log( str.match(re) );

// Создайте регэксп, который ищет все числа, в том числе и с десятичной точкой, в том числе и отрицательные.
// Пример использования:
var re = /-?\d\d*(\.\d)?/g; //мое решение
var re1 = /-?\d+(\.\d+)?/g; //правильное решение
var str = "-1.5 0 2 -123.4. -3 -3.3";
console.log( str.match(re) );
console.log( str.match(re1) );

var witch = 'a "witch" and her "broom" as one';
var reg = /".+"/g;
var reg1 = /".+?"/g;
console.log(witch.match(reg));
console.log(witch.match(reg1));

var str = '<a href="link" class="doc"> linklinklink </a><br><a href="link1" class="doc"> linklinklink </a>';
var str1 = '<a href="link" class="wrong"> linklinklink </a><br><a href="link1" class="doc"> linklinklink </a>';
var reg = /<a href=".*" class="doc">/g;
var reg1 = /<a href=".*?" class="doc">/g;
var reg2 = /<a href="[^"]*" class="doc">/g;

console.log(str.match(reg));
console.log(str.match(reg1));
console.log(str.match(reg1));
console.log(str1.match(reg1));
console.log(str1.match(reg2));

//TASKS
//1 Найти все комментарии в тексте
var re = /<!--[\s\S]*?-->/g;

var str = '.. <!-- Мой -- комментарий \n тест --> ..  <!----> .. ';
// var str = '.. <!-- Мой -- комментарий \n тест -->';

console.log( str.match(re) ); // '<!-- Мой -- комментарий \n тест -->', '<!---->'

//2
// Создайте регулярное выражение для поиска всех (открывающихся и закрывающихся) HTML-тегов вместе с атрибутами.

// Пример использования:

var re = /<[^>]+?>/g;

var str = '<> <a href="/"> <input type="radio" checked> <b>';

console.log( str.match(re) ); // '<a href="/">', '<input type="radio" checked>', '<b>'

//Скобочные группы
var str = 'Gogogo now!';
var reg = /(go)+/g;
console.log(str.match(reg));

var str = '<h1>Hello world</h1>';
var reg = /<.*?>/;
var reg1 = /<(.*?)>/g;
console.log(str.match(reg));
console.log(str.match(reg1));

var match;
while ((match = reg1.exec(str)) !== null) {
	console.log(match);
};

//TASKS
// Напишите регулярное выражение, которое находит цвет в формате #abc или #abcdef. То есть, символ #, после которого идут 3 или 6 шестнадцатиричных символа.
var re = /#[a-z0-9]{3}([a-z0-9]{3})?\b/gi;

var str = "color: #3f3; background-color: #AA00ef; and: #abcd";

console.log( str.match(re) ); // #3f3 #AA0ef

// Арифметическое выражение состоит из двух чисел и операции между ними, например:

// 1 + 2
// 1.2 * 3.4
// -3 / -6
// -2 - 2
// Список операций: "+", "-", "*" и "/".

// Также могут присутствовать пробелы вокруг оператора и чисел.

// Напишите функцию, которая будет получать выражение и возвращать массив из трёх аргументов:

// Первое число.
// Оператор.
// Второе число.

function expParse(exp) {
	var reg = /(-?\d+(?:\.\d+)?)\s*([\+\-\*\/])\s*(-?\d+(?:\.\d+)?)/;
	var arr = exp.match(reg);
	var result = arr.slice(1,4);
	return result;
}

console.log(expParse('1 + 2'));
console.log(expParse('-1 + -2'));
console.log(expParse('1.2 * 3.4'));
console.log(expParse('-1.2 - -3.4'));

function parse(expr) {
  var re = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;

  var result = expr.match(re);

  if (!result) return;
  result.shift();

  return result;
}

console.log( parse("-1.23 * 3.45") );

//Обратные ссылки: \n и $n

var name = 'Alexander Pushkin';
var re = /[a-z]+/gi;
var reg = /([a-z]+)\s([a-z]+)/i;
console.log(name.match(re));
console.log(name.replace(reg, '$2, $1'));

var str = "he said: \"He's the one!\".";
var re1 = /['"].*?['"]/;
var re2 = /(['"]).*?\1/;
console.log(str.match(re1));
console.log(str.match(re2));

//TASK

// Создайте регулярное выражение для поиска ББ-тегов (b url quote) и их содержимого.
// Например:
//b url quote
var re = /\[(b|url|quote)\][\s\S]*?\[\/\1\]/gi;
var str = "..[url]http://ya.ru[/url]..";
var str1 = "[url][b]http://ya.ru[/b][/url]";
console.log( str.match(re) ); // [url]http://ya.ru[/url]
console.log( str1.match(re) );
// console.log( str1.match(re1) );

// Найдите языки программирования
// решение
// Существует много языков программирования, например Java, JavaScript, PHP, C, C++.

// Напишите регулярное выражение, которое найдёт их все в строке «Java JavaScript PHP C++ C»

var str = 'Java JavaScript PHP C++ C';
var re = /java(script)?|php|c(\+\+)?/gi;
console.log( str.match(re) );

//
// Напишите регулярное выражение, которое будет искать в тексте тег <style>. Подходят как обычный тег <style>, так и вариант с атрибутами <style type="...">.

// Но регулярное выражение не должно находить <styler>!

// Использование:

var re = /<style(\s.+)?>/g;

alert( "<style> <styler> <style test>".match(re) ); // <style>, <style test>

//
// MAC-адрес сетевого интерфейса состоит из шести двузначных шестнадцатеричных чисел, разделённых двоеточием.

// Например: '01:32:54:67:89:AB'.

// Напишите регулярное выражение, которое по строке проверяет, является ли она корректным MAC-адресом.
var re = /^([0-9A-F]{2}:){5}[0-9A-F]{2}$/i;
var re1 = /^[0-9A-F]{2}$/i;
var re2 = /^([0-9A-F]{2}:){5}[0-9A-F]{2}$/i;
console.log(re1.test('A1'));
console.log(re2.test('01:32:54:67:89:ZZ'));
// console.log( '01:32:54:67:89:'.match(re) );
console.log( re.test('01:32:54:67:89:AB') ); // true
console.log( re.test('0132546789AB') ); // false (нет двоеточий)
console.log( re.test('01:32:54:67:89') ); // false (5 чисел, а не 6)
console.log( re.test('01:32:54:67:89:ZZ') ) // false (ZZ в конце)
//KATA FROM CODEWARS
function toCurrency(price){
  // var reg = /(\d)(?=(\d\d\d)+$)/g;
  return ""+price.replace(/(\d)(?=(\d\d\d)+$)/g,'$1,');
}

console.log(toCurrency('123456'));
// var str = "830000";
// console.log(str.replace(/(\d)(?=(\d\d\d)+$)/g, '$1,'));

