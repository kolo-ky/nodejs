#!/usr/bin/env node
import process from 'node:process';
import { getAppParams } from './helpers/appHelpers.mjs';
import { printHelp, printError } from './services/log.service.mjs';
import { ERROR_CODE } from './helpers/constants.mjs';
import { getWeather } from './services/api.service.mjs';
import {
	saveToken,
	saveCity,
	printWeather,
	saveLanguage,
} from './helpers/appHelpers.mjs';

const getForCast = async () => {
	try {
		const weather = await getWeather();

		printWeather(weather);
	} catch (error) {
		if (error?.response?.status === ERROR_CODE.NOT_FOUND) {
			printError('Неверно указан город');
		} else if (error?.response?.status === ERROR_CODE.UNAUTHORIZED) {
			printError('Неверно указан токен');
		} else {
			printError(error.message);
		}
	}
};

const initCLI = () => {
	const [firstArgument, secondArgument, ...rest] = process.argv;
	const appParams = getAppParams(rest);

	if (appParams.c) {
		return saveCity(appParams.c);
	}

	if (appParams.t) {
		return saveToken(appParams.t);
	}

	if (appParams.l) {
		return saveLanguage(appParams.l);
	}

	if (appParams.h) {
		printHelp();
	}

	getForCast();
};

initCLI();
