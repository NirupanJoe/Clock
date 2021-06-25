const getTimes = () => {
	const date = new Date();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const getSecond = date.getSeconds();
	const ten = 10;
	const second = getSecond < ten ? `0${ getSecond }` : getSecond;

	return {
		hour,
		minute,
		second,
	};
};

const getClock = () => {
	const date = new Date();
	const local = date.toLocaleString('en-IN',
		{ timeStyle: 'medium', hour12: 'true' });

	return local;
};
const clockManagement = {
	getTimes,
	getClock,
};

export default clockManagement;
