#!/usr/bin/env node
import process from 'node:process';
import { getAppParams } from './helpers/appHelpers.mjs';
import { printHelp } from './services/log.service.mjs';

const initCLI = () => {
	const [firstArgument, secondArgument, ...rest] = process.argv;
	const appParams = getAppParams(rest);

	if (appParams.s) {
		console.log(appParams.s);
	}

	if (appParams.t) {
		console.log(appParams.t);
	}

	if (appParams.h) {
		printHelp();
	}

	console.log('output weather');
};

initCLI();
