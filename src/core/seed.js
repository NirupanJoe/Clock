import config from './config';
import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	count: config.countStart,
	refreshID: rndString(refreshIDLength),
	time: {
		hour: 0,
		minute: 0,
		second: 0,
	},
};

export default seed;
