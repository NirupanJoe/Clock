import context from '../core/context';
import clockManagement from './clockManagement';

const clockService = () => {
	const { clockDelay } = context.config;
	const { clockDisplay } = context.actions;

	setInterval(() => clockDisplay(clockManagement.getTimes()), clockDelay);
};

const TickerService = {
	clockService,
};

export default TickerService;
