import { React } from 'react';
import context from '../core/context';
import HourSelect from './hourSelect';

const ClockDisplay = () => {
	const { hour, minute, second } = context.state.time;

	return <div>
		<div>{HourSelect()}</div>
		<h2 className="time">{ hour }:{ minute }:{ second }</h2>
	</div>;
};

export default ClockDisplay;
