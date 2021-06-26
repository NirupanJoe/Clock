import { React } from 'react';
import './analogClock.css';

const AnalogClock = () =>
	<div className="clock">
		<div className="container">
			<div className="clock-circle"> </div>
			<div className="hour"> </div>
			<div className="minute"> </div>
			<div className="second"> </div>
		</div>
	</div>;

export default AnalogClock;
