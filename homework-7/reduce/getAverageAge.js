function getAverageAge(users) {
	function getUserAger(accumulator, user) {
		return accumulator + user.age / users.length;
	}
	return users.reduce(getUserAger, 0);
}

const users = [
	{
		username: 'Yuri Gagarin',
		lang: 'ru',
		age: 56,
	},
	{
		username: 'Nil Armstrong',
		lang: 'ENG',
		age: 54,
	},
];
getAverageAge(users); // 55
