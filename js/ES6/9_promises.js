'use strict';
// Синтаксис создания Promise:

// var promise = new Promise(function(resolve, reject) {
//   // Эта функция будет вызвана автоматически

//   // В ней можно делать любые асинхронные операции,
//   // А когда они завершатся — нужно вызвать одно из:
//   // resolve(результат) при успешном выполнении
//   // reject(ошибка) при ошибке
// })

// Универсальный метод для навешивания обработчиков:

// promise.then(onFulfilled, onRejected)
// onFulfilled – функция, которая будет вызвана с результатом при resolve.
// onRejected – функция, которая будет вызвана с ошибкой при reject.
// С его помощью можно назначить как оба обработчика сразу, так и только один:

// // onFulfilled сработает при успешном выполнении
// promise.then(onFulfilled)
// // onRejected сработает при ошибке
// promise.then(null, onRejected)
// .catch
// Для того, чтобы поставить обработчик только на ошибку, вместо .then(null, onRejected) можно написать .catch(onRejected) – это то же самое.


// Возьмём setTimeout в качестве асинхронной операции, которая должна через некоторое время успешно завершиться с результатом «result»:
let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('result')
	}, 2000);
});

promise
	.then(
		result => {
			console.log('Fullfilled:' + result);
		},
		error => {
			console.log('rejected:' + error);
		});