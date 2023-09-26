import { APP_PARAMS } from './constants.mjs';

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
