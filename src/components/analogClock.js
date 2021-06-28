import { React } from 'react';
import './analogClock.css';
import context from '../core/context';
const six = 6;
const thirty = 30;

const secondDeg = () => {
	const { second } = context.state.time;

	return {
		transform: `rotate(${ second * six }deg)`,
	};
};

const minuteDeg = () => {
	const { minute } = context.state.time;

	return {
		transform: `rotate(${ minute * six }deg)`,
	};
};

const hourDeg = () => {
	const { hour } = context.state.time;

	return {
		transform: `rotate(${ hour * thirty }deg)`,
	};
};

const AnalogClock = () =>
	<div className="clock">
		<div className="container">
			<div className="clock-circle"> </div>
			<div className="hour"style={ hourDeg() }> </div>
			<div className="minute"style={ minuteDeg() }> </div>
			<div className="second"style={ secondDeg() }> </div>
		</div>
	</div>;

export default AnalogClock;
