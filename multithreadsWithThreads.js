const { Worker } = require('worker_threads');

let firstNumberLimit = 0;
let lastNumberLimit = 300000;
let arraysCount = 4;

let numbersArray = [];
let subArrays = [];

for (let i = firstNumberLimit; i <= lastNumberLimit; i++) {
	numbersArray.push(Math.floor(Math.random() * lastNumberLimit));
}

const elementsLimit = lastNumberLimit / arraysCount;

for (let i = 0; i < arraysCount; i++) {
	subArrays[i] = numbersArray.splice(0, elementsLimit);
}

const getDivideByModuleCount = numbersArray => {
	return new Promise(resolve => {
		const worker = new Worker('./worker.js', {
			workerData: {
				numbersArray,
			},
		});

		worker.on('message', msg => {
			resolve(msg);
		});
	});
};

subArrays.forEach(arraysItem => {
	getDivideByModuleCount(arraysItem).then(data => {
		console.log('end', data);
	});
});
