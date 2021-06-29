import { React } from 'react';
import './analogClock.css';
import context from '../core/context';
import clockManagement from '../services/clockManagement';

const six = 6;
const thirty = 30;

const clock = () => {
	const { time } = context.state;
	const { hour, minute, second } = clockManagement.getTimes(time);

	return {
		hour,
		minute,
		second,
	};
};

const AnalogClock = () =>
	<div className="clock">
		<div className="container">
			<div className="clock-circle"> </div>
			<div
				className="hour"
				style={ { transform: `rotate(${ clock().hour * thirty }deg)` } }
			/>
			<div
				className="minute"
				style={ { transform: `rotate(${ clock().minute * six }deg)` } }
			/>
			<div
				className="second"
				style={ { transform: `rotate(${ clock().second * six }deg)` } }
			/>
		</div>
	</div>;

export default AnalogClock;
