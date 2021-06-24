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

const clockManagement = {
	getTimes,
};

export default clockManagement;
