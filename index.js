let { argv } = require('node:process');

let add = require('./add.js');
let subtract = require('./subtract.js');
let multiply = require('./multiply.js');
let divide = require('./divide.js');

let firstNum = argv[2];
let secondNum = argv[3];
let operation = argv[4];
let result = 0;

switch (operation) {
	case 'add':
		result = add(firstNum, secondNum);
		break;
	case 'subtract':
		result = subtract(firstNum, secondNum);
		break;
	case 'multiply':
		result = multiply(firstNum, secondNum);
		break;
	case 'divide':
		result = divide(firstNum, secondNum);
		break;
	default:
		console.log('Operation not found');
		break;
}

console.log(`result = ${result}`);
