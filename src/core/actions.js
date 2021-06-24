const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});
const clockDisplay = ({ data }) => ({
	time: data,
});

const actions = {
	increaseCount,
	clockDisplay,
};

export default actions;
