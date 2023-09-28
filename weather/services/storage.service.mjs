import { promises } from 'fs';
import { FILE_PATH } from '../helpers/constants.mjs';
import { getData } from '../helpers/storageHelper.mjs';

export const saveKeyValue = async (key, value) => {
	let data = getData(FILE_PATH);

	data[key] = value;

	await promises.writeFile(FILE_PATH, JSON.stringify(data));
};

export const getKeyValue = async key => {
	const data = getData(FILE_PATH);

	return data[key];
};
