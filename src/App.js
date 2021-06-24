import { React, useEffect } from 'react';
import './App.css';
import ClockDisplay from './components/clockDisplay';
import TickerService from './services/ticker';

const App = () => {
	useEffect(TickerService.clockService, []);

	return (
		<div className="App">
			<div>{ ClockDisplay() }</div>
		</div>
	);
};

export default App;
