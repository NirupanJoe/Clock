import { React } from 'react';
import context from '../core/context';

const option = (hour) => <option key={ hour }>{hour}</option>;

const HourSelect = () =>
	<div>
		<label>Hour : </label>
		<select
			value={ context.state.hour }
			onChange={ (evt) => context.actions.hourSelect(evt.target.value) }
		>
			{ context.config.hours.map(option) }
		</select>
	</div>;

export default HourSelect;
