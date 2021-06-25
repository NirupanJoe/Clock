import { React } from 'react';
import ClockHour from './clockHour';
import HourSelect from './hourSelect';

const ClockDisplay = () => <div>
	<div>{HourSelect()}</div>
	{ ClockHour() }
</div>;

export default ClockDisplay;
