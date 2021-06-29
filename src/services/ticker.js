import context from '../core/context';

const clockService = () => {
	const { clockDelay } = context.config;
	const { setTime } = context.actions;

	setInterval(() => setTime(new Date()), clockDelay);
};

const TickerService = {
	clockService,
};

export default TickerService;
