let { argv } = require('node:process');
let { EventEmitter } = require('node:events');

let firstNum = Number(argv[2]);
let secondNum = Number(argv[3]);
let operation = argv[4];

const eventEmitter = new EventEmitter();

eventEmitter.on('add', (firstNum, secondNum) => {
	eventEmitter.emit('result', firstNum + secondNum);
});

eventEmitter.on('subtract', (firstNum, secondNum) => {
	eventEmitter.emit('result', firstNum - secondNum);
});

eventEmitter.on('multiply', (firstNum, secondNum) => {
	eventEmitter.emit('result', firstNum * secondNum);
});

eventEmitter.on('divide', (firstNum, secondNum) => {
	eventEmitter.emit('result', firstNum / secondNum);
});

eventEmitter.on('result', result => {
	console.log(`result = ${result}`);
});

switch (operation) {
	case 'add':
		eventEmitter.emit('add', firstNum, secondNum);
		break;
	case 'subtract':
		eventEmitter.emit('subtract', firstNum, secondNum);
		break;
	case 'multiply':
		eventEmitter.emit('multiply', firstNum, secondNum);
		break;
	case 'divide':
		eventEmitter.emit('divide', firstNum, secondNum);
		break;
	default:
		console.log('Operation not found');
		break;
}
