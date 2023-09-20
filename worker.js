const { parentPort, workerData } = require('worker_threads');

const divider = 3;

const getDivideByModuleCount = ({ numbersArray }) => {
	let counter = 0;

	numbersArray.forEach(num => {
		if (num % divider === 0) {
			counter++;
		}
	});

	return counter;
};

parentPort.postMessage(getDivideByModuleCount(workerData));
