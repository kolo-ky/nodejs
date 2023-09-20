let firstNumberLimit = 0;
let lastNumberLimit = 300000;
let divider = 3;
let counter = 0;
let arraysCount = 4;

let numbersArray = [];
let subArrays = [];

for (let i = firstNumberLimit; i <= lastNumberLimit; i++) {
	numbersArray.push(Math.floor(Math.random() * lastNumberLimit));
}

numbersArray.forEach(num => {
	if (num % divider === 0) {
		counter++;
	}
});

console.log(counter);
