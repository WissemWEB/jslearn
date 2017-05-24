"use strict";
// try {
// 	console.log('Начало блока try!');
// 	lalala;
// 	console.log('Конец блока try');
// } catch(error) {
// 	console.log(error.name + '/' + error.message + '/' + error.stack); 
// }
// console.log('Code continue run');

// var data = '{"name":"Vasyl", "surname":"Semikhov"}';
// var hasError = 'Has error';

// var user = JSON.parse(data);

// try {
// 	var user1 = JSON.parse(hasError);
// 	console.log(user1.name);
// } catch(error) {
// 	console.log('you have errors in data:' + error.name + '\n' + error.message + '\n' + error.stack);
// }
// console.log(user.surname);
// console.log(user.name);
// try {
// 	// var data1 = '{"age":30, "name": "Vasyl"}';
// 	var data1 = '{"age":30}';
// 	var user2 = JSON.parse(data1);
// 	if (!user2.name) throw new SyntaxError('data has error, please fill field "name"');
// 	blabla();
// } catch(e) {
// 		if (e.name == 'SyntaxError') {
// 			console.log('----you have syntaxerror in data1:' + e.name + '\n----' + e.message + '\n----' + e.stack);
// 		} else {
// 			throw(e);
// 		}
// }
// alert('code running...');

// function readData() {
//   var data = '{ "name": "Вася", "age": 30 }';

//   try {
//     // ...
//     blabla(); // ошибка!
//   } catch (e) {
//     // ...
//     if (e.name != 'SyntaxError') {
//       throw e; // пробрасываем
//     }
//   }
// }

// try {
//   readData();
// } catch (e) {
//   alert( "Поймал во внешнем catch: " + e ); // ловим
// }

try {
  alert( 'try' );
  if (confirm('Сгенерировать ошибку?')) BAD_CODE();
} catch (e) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}