import { React } from 'react';
import context from '../core/context';
import AnalogClock from './analogClock';
import DigitalClock from './digitalClock';
import HourSelect from './hourSelect';

const ClockType = () => {
	const clock = context.state.clockType === 'Digital'
		? <div>
			<div>{HourSelect()}</div>
			<div>{DigitalClock()}</div>
		</div>
		: <div>{AnalogClock()}</div>;

	return clock;
};

export default ClockType;
