import { React } from 'react';
import context from '../core/context';
import AnalogClock from './analogClock';
import DigitalClock from './digitalClock';

const ClockType = () => {
	const clock = context.state.clockType === 'Digital'
		? <div>
			<div>{DigitalClock()}</div>
		</div>
		: <div>{AnalogClock()}</div>;

	return clock;
};

export default ClockType;
