import { React } from 'react';
import context from '../core/context';

const ClockDisplay = () =>
	<div>
		{ context.state.time.hour }: { context.state.time.minute }
		: { context.state.time.second }
	</div>;

export default ClockDisplay;
