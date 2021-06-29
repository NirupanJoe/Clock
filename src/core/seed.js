import config from './config';
import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	count: config.countStart,
	refreshID: rndString(refreshIDLength),
	time: new Date(),
	hour: config.hours[0],
	clockType: config.clocks[1],
};

export default seed;
