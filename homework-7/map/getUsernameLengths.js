function getUserNameLengths(users) {
	function userNameLength(user) {
		return user.userName.length;
	}
	return users.map(userNameLength);
}

const users = [
	{
		userName: 'Yuri Gagarin',
		lang: 'ru',
	},
	{
		userName: 'Nil Armstrong',
		lang: 'ENG',
	},
];
getUserNameLengths(users); // [12, 13]
