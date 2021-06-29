import { React } from 'react';
import context from '../core/context';
import HourSelect from './hourSelect';

const DigitalClock = () => {
	const { hour, minute, second } = context.state.time;
	const clock = context.state.hour === 'hour12'
		? <div className="time">{context.state.clock}</div>
		: <div className="time">{ hour }:{ minute }:{ second }</div>;

	return (
		<div>
			<div>{HourSelect()}</div>
			{ clock }
		</div>
	);
};

export default DigitalClock;
