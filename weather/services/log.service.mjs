import chalk from 'chalk';
import dedent from 'dedent-js';
import colors from 'colors';

const { bgBlue, bgGreen, bgRed } = chalk;
const { gray } = colors;

export const printSuccess = ({ message }) => {
	console.log(`${bgGreen('SUCCESS')} ${message}`);
};

export const printError = message => {
	console.log(`${bgRed('ERROR')} ${message}`);
};

export const printHelp = () => {
	console.log(
		dedent(`
		${bgBlue('HELP')}
		${gray('Без параметров')} - вывод погоды
		${gray('-c [CITY]')} для установки города
		${gray('-t [API_KEY]')} для установки токена
		${gray('-h')} для вызова помощи
			`)
	);
};
