import { homedir } from 'os';
import { join } from 'path';

export const APP_PARAMS = ['-c', '-t', '-h'];
export const APP_KEYS = { city: 'city', token: 'token' };
export const FILE = 'weather-data.json';
export const FILE_PATH = join(homedir(), FILE);
