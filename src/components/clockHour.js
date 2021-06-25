import { React } from 'react';
import context from '../core/context';

const ClockHour = () => {
	const { hour, minute, second } = context.state.time;
	const clock = context.state.hour === 'hour12'
		? <div className="time">{context.state.clock}</div>
		: <div className="time">{ hour }:{ minute }:{ second }</div>;

	return clock;
};

export default ClockHour;
