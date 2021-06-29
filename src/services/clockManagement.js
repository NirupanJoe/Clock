const ten = 10;

const getTimes = (date) => {
	const getHour = date.getHours();
	const getMinute = date.getMinutes();
	const getSecond = date.getSeconds();
	const hour = getHour < ten ? `0${ getHour }` : getHour;
	const minute = getMinute < ten ? `0${ getMinute }` : getMinute;
	const second = getSecond < ten ? `0${ getSecond }` : getSecond;
	const local = date.toLocaleString('en-IN',
		{ timeStyle: 'medium', hour12: 'true' });

	return {
		hour,
		minute,
		second,
		local,
	};
};

const clockManagement = {
	getTimes,
};

export default clockManagement;
