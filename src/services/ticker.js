import context from '../core/context';
import clockManagement from './clockManagement';

const clockService = () => {
	const { clockDelay } = context.config;
	const { clockDisplay, alterClockDisplay } = context.actions;

	setInterval(() => {
		clockDisplay(clockManagement.getTimes());
		alterClockDisplay(clockManagement.getClock());
	}, clockDelay);
};

const TickerService = {
	clockService,
};

export default TickerService;
