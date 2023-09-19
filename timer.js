let { argv } = require('node:process');
let extractANumber = require('./helper.js');

let hour = extractANumber('h', argv[2]);
let minute = extractANumber('m', argv[3]);
let secund = extractANumber('s', argv[4]);

let waitingTime = hour * 3600000 + minute * 60000 + secund * 1000;

let timeOutId = setTimeout(() => {
	console.log(`${hour} h, ${minute} m и ${secund} s have passed`);
	clearTimeout(timeOutId);
}, waitingTime);
