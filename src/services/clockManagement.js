const getTimes = () => {
	const date = new Date();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();

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
