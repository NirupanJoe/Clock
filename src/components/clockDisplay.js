import { React } from 'react';
import AnalogClock from './analogClock';
import ClockSelect from './clockSelect';

const ClockDisplay = () => <div>
	<div>{ClockSelect()}</div>
	<div>{AnalogClock()}</div>
</div>;

export default ClockDisplay;
