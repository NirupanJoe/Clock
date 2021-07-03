import { React } from 'react';
import './analogClock.css';
import context from '../core/context';
import clockManagement from '../services/clockManagement';
import AnalogClockHour from './analogClockHour';
import AnalogClockMinute from './analogClockMinute';
import AnalogClockSecond from './analogClockSecond';

const six = 6;
const thirty = 30;

const AnalogClock = () => {
	const { hour, minute, second } = clockManagement
		.getTimes(context.state.time);

	return <div className="clock">
		<div className="container">
			<div className="clock-circle"> </div>
			{AnalogClockHour(hour, thirty)}
			{AnalogClockMinute(minute, six)}
			{AnalogClockSecond(second, six)}
		</div>
	</div>;
};

export default AnalogClock;
