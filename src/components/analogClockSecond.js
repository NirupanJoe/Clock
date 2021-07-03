import { React } from 'react';

const AnalogClockSecond = (second, six) =>
	<div
		className="second"
		style={ { transform: `rotate(${ second * six }deg)` } }
	/>;

export default AnalogClockSecond;
