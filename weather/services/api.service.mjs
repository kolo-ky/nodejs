import axios from 'axios';
import { getKeyValue } from './storage.service.mjs';
import {
	APP_KEYS,
	API_URL,
	LANG,
	UNIT,
	DEFAULT_CITY,
} from '../helpers/constants.mjs';

export const getWeather = async () => {
	const token = await getKeyValue(APP_KEYS.token);

	if (!token) {
		throw new Error(
			'Не задан токен, используйте параметр -h для вызова справки'
		);
	}

	const city = (await getKeyValue(APP_KEYS.city)) ?? DEFAULT_CITY;

	const { data } = await axios.get(API_URL, {
		params: {
			q: city,
			appId: token,
			lang: LANG,
			units: UNIT,
		},
	});

	return data;
};
