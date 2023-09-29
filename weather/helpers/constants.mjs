import { homedir } from 'os';
import { join } from 'path';

export const APP_PARAMS = ['-c', '-t', '-h'];
export const APP_KEYS = { city: 'city', token: 'token' };
export const FILE = 'weather-data.json';
export const FILE_PATH = join(homedir(), FILE);
export const UNIT = 'metric';
export const LANG = 'ru';
export const DEFAULT_CITY = 'moscow';
export const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
export const GEO_URL = 'http://nominatim.openstreetmap.org/search';
export const GEO_PARAMS = {
	format: 'json',
	polygon_geojson: 1,
	addressdetails: 1,
};
export const ERROR_CODE = {
	UNAUTHORIZED: 401,
	NOT_FOUND: 404,
};
