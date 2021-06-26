import { React } from 'react';
import context from '../core/context';

const option = (clock) => <option key={ clock }>{clock}</option>;

const ClockSelect = () =>
	<div>
		<label>ClockType : </label>
		<select
			value={ context.state.clockType }
			onChange={ (evt) => context.actions.clockSelect(evt.target.value) }
		>
			{ context.config.clocks.map(option) }
		</select>
	</div>;

export default ClockSelect;
