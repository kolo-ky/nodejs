import dedent from 'dedent-js';
import { APP_PARAMS } from './constants.mjs';
import { saveKeyValue } from '../services/storage.service.mjs';
import { printSuccess, printError } from '../services/log.service.mjs';
import { cityIsExist } from '../services/api.service.mjs';
import { weatherIcons } from './amoji.mjs';
import { APP_KEYS, PARAMS_NAMES } from '../helpers/constants.mjs';

export const getAppParams = args => {
	let params = {};

	args.forEach((value, index, array) => {
		if (APP_PARAMS.includes(value)) {
			if (index === array.length - 1) {
				params[value.substring(1)] = true;
			} else if (!APP_PARAMS.includes(array[index + 1])) {
				params[value.substring(1)] = array[index + 1];
			} else {
				params[value.substring(1)] = true;
			}
		}
	});

	return params;
};

export const saveToken = async token => {
	if (!paramExist(token, PARAMS_NAMES.token.toLowerCase())) {
		return;
	}

	try {
		await saveKeyValue(APP_KEYS.token, token);

		printSuccess(`${PARAMS_NAMES.token} сохранен.`);
	} catch (error) {
		printError(`Ошибка: ${error.message}`);
	}
};

export const saveCity = async city => {
	if (await cityIsExist(city)) {
		await saveKeyValue(APP_KEYS.city, city);

		printSuccess(`${PARAMS_NAMES.city} "${city}" сохранен.`);
	} else {
		printError(`Неверное название города: ${city}`);
	}
};

export const printWeather = weatherData => {
	const [weatherDetails] = weatherData.weather;
	const weatherIcon = weatherIcons[weatherDetails.main.toLowerCase()];

	console.log(
		dedent(`Сегодня в городе ${weatherData.name}: ${weatherIcon}  ${weatherDetails.description}.
		Температура ${weatherData.main.temp}°C, ощущается как ${weatherData.main.feels_like}°C.
		Скорость ветра ${weatherData.wind.speed} м/с.`)
	);
};

export const saveLanguage = async language => {
	if (!paramExist(language, PARAMS_NAMES.lang.toLowerCase())) {
		return;
	}

	try {
		await saveKeyValue(APP_KEYS.lang, language);

		printSuccess(`${PARAMS_NAMES.lang} сохранен.`);
	} catch (error) {
		printError(`Ошибка: ${error.message}`);
	}
};

const paramExist = (param, paramName) => {
	if (!param.length) {
		printError(
			`Не передан ${paramName}, используйте параметр -h для вызова справки`
		);
	}

	return param.length > 0;
};
