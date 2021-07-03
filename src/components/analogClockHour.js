import { React } from 'react';

const AnalogClockHour = (hour, thirty) =>
	<div
		className="hour"
		style={ { transform: `rotate(${ hour * thirty }deg)` } }
	/>;

export default AnalogClockHour;
