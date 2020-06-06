function filterUsers(users) {
	function removeRuUser(user) {
		return user.lang !== 'ru';
	}
	return users.filter(removeRuUser);
}

const users = [
	{
		username: 'Yuri Gagarin',
		lang: 'ru',
	},
	{
		username: 'Nil Armstrong',
		lang: 'ENG',
	},
];
console.log(filterUsers(users)); // [{ username: "Nil Armstrong, lang: "ENG" }]
