import { React } from 'react';
import context from '../core/context';
import HourSelect from './hourSelect';
import clockManagement from '../services/clockManagement';

const DigitalClock = () => {
	const { hour, minute, second, local } = clockManagement
		.getTimes(context.state.time);
	const clock = context.state.hour === 'hour12'
		? <div className="time">{local}</div>
		: <div className="time">{ hour }:{ minute }:{ second }</div>;

	return (
		<div>
			<div>{HourSelect()}</div>
			{ clock }
		</div>
	);
};

export default DigitalClock;
