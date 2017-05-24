"use strict";
let map = new Map();
map.set("1", 1);
map.set("2", 2);
map.set(1, 3);
map.set("firstName", "Surname");
console.log(map);
console.log(map.get("1"));
console.log(map.get(1));
console.log(map.get("firstName"));
console.log(map.size);
let user = {
	name: "Vasyl" 
}
console.log(user.name);
//использование объекта в качестве ключа
let map1 = new Map();
map1.set(user, "key is object");
console.log(user.name);

//удаление записей в мап
console.log(map.delete("1"));//true если запись была, нет-false
console.log(map.get("1"));


//ИТЕРАЦИЯ
// map.keys() – возвращает итерируемый объект для ключей,
// map.values() – возвращает итерируемый объект для значений,
// map.entries() – возвращает итерируемый объект для записей [ключ, значение], он используется по умолчанию в for..of.

for (let key of map.keys()) {
	console.log(key);
};

for (let value of map.values()) {
	console.log(value);
};

for (let entry of map.entries()) {
	console.log(entry);
};

for (let entry of map1.entries()) {
	console.log(entry);
};

// SET

var vasya  = {name: "Vasyl"};
var alona  = {name: "Alona"};
var masha  = {name: "Masha"};
var petya  = {name: "Petya"};
let set = new Set();
set.add(vasya);
set.add(alona);
set.add(alona);
set.add(alona);
set.add(masha);
set.add(masha);
set.add(masha);
set.add(petya);
set.delete(petya);

console.log(set.size);
set.forEach(user => console.log(user.name));