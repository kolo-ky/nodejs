import { APP_PARAMS } from './constants.mjs';
import { saveKeyValue } from '../services/storage.service.mjs';
import { printSuccess, printError } from '../services/log.service.mjs';
import { cityIsExist } from '../services/api.service.mjs';
import { APP_KEYS } from '../helpers/constants.mjs';

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

export const saveCity = async city => {
	if (await cityIsExist(city)) {
		await saveKeyValue(APP_KEYS.city, city);

		printSuccess(`Город "${city}" сохранен.`);
	} else {
		printError(`Неверное название города: ${city}`);
	}
};
