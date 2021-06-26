import { React } from 'react';
import ClockSelect from './clockSelect';
import ClockType from './clockType';

const ClockDisplay = () =>
	<div>
		<div>{ClockSelect()}</div>
		{ClockType()}
	</div>;

export default ClockDisplay;
