import { React } from 'react';

const AnalogClockMinute = (minute, six) =>
	<div
		className="minute"
		style={ { transform: `rotate(${ minute * six }deg)` } }
	/>;

export default AnalogClockMinute;
