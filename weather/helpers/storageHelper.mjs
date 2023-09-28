import { promises } from 'fs';

export const isExist = async path => {
	try {
		await promises.stat(path);

		return true;
	} catch (error) {
		return false;
	}
};

export const getData = async path => {
	let data = {};

	if (await isExist(path)) {
		const file = await promises.readFile(path);
		data = JSON.parse(file);
	}

	return data;
};
