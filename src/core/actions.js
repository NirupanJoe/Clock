const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});
const setTime = ({ data }) => ({
	time: data,
});
const alterClockDisplay = ({ data }) => ({
	clock: data,
});
const hourSelect = ({ data }) => ({
	hour: data,
});
const clockSelect = ({ data }) => ({
	clockType: data,
});

const actions = {
	increaseCount,
	setTime,
	alterClockDisplay,
	hourSelect,
	clockSelect,
};

export default actions;
