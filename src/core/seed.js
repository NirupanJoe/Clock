import config from './config';
import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	count: config.countStart,
	refreshID: rndString(refreshIDLength),
	time: {
		hour: null,
		minute: null,
		second: null,
	},
	clock: null,
	hour: config.hours[0],
};

export default seed;
