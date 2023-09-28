import { homedir } from 'os';
import { join } from 'path';
import { FILE } from '../helpers/constants.mjs';

const filePath = join(homedir(), FILE);

export const saveKeyValue = (key, value) => {
	console.log(key, value);
	console.log(filePath);
};
