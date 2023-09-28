#!/usr/bin/env node
import process from 'node:process';
import { getAppParams } from './helpers/appHelpers.mjs';
import { printHelp } from './services/log.service.mjs';
import { saveKeyValue } from './services/storage.service.mjs';
import { APP_KEYS } from './helpers/constants.mjs';

const initCLI = () => {
	const [firstArgument, secondArgument, ...rest] = process.argv;
	const appParams = getAppParams(rest);

	if (appParams.c) {
		saveKeyValue(APP_KEYS.city, appParams.c);
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
