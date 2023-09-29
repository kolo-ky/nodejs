#!/usr/bin/env node
import process from 'node:process';
import { getAppParams } from './helpers/appHelpers.mjs';
import {
	printHelp,
	printSuccess,
	printError,
} from './services/log.service.mjs';
import { saveKeyValue } from './services/storage.service.mjs';
import { APP_KEYS, ERROR_CODE } from './helpers/constants.mjs';
import { getWeather } from './services/api.service.mjs';

const saveToken = async token => {
	if (!token.length) {
		printError('Не передан токен, используйте параметр -h для вызова справки');
		return;
	}

	try {
		await saveKeyValue(APP_KEYS.token, token);

		printSuccess('Токен сохранен.');
	} catch (error) {
		printError(`Ошибка: ${error.message}`);
	}
};

const getForCast = async () => {
	try {
		const weather = await getWeather();

		console.log(weather);
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
		console.log(appParams.c);
	}

	if (appParams.t) {
		return saveToken(appParams.t);
	}

	if (appParams.h) {
		printHelp();
	}

	getForCast();
};

initCLI();
