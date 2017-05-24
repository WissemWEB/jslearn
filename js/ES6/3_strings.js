
//STRINGS
//Многострочная строка в `` кавычках
console.log(`моя 
			многострочная 
				строка`);
let apples = 2;
let oranges = 3;

// Возможность подстановки в строку переменных и др. смотреть ниже 
function sum(a, b) {
	return a + b; 
}

console.log(`${sum(2,3)} + ${oranges} = ${apples + oranges}`);

//функции шаблонизации
// let str1 = func`моя строка`

function f(strings, ...values) {
  console.log(JSON.stringify(strings));     // ["Sum of "," + "," =\n ","!"]
  console.log(JSON.stringify(strings.raw)); // ["Sum of "," + "," =\\n ","!"]
  console.log(JSON.stringify(values));      // [3,5,8]
}

let apples1 = 3;
let oranges1 = 5;
let str = f`Sum of ${apples1} + ${oranges1} =\n ${apples1 + oranges1}!`;

