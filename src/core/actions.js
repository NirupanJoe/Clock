const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});
const clockDisplay = ({ data }) => ({
	time: data,
});
const alterClockDisplay = ({ data }) => ({
	clock: data,
});
const hourSelect = ({ data }) => ({
	hour: data,
});

const actions = {
	increaseCount,
	clockDisplay,
	alterClockDisplay,
	hourSelect,
};

export default actions;
