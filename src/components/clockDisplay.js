import { React } from 'react';
import context from '../core/context';

const ClockDisplay = () => {
	const { hour, minute, second } = context.state.time;

	return <div className="time">
		<div>{ hour }:{ minute }:{ second }</div>
		<div>{ context.state.clock }</div>
	</div>;
};

export default ClockDisplay;
