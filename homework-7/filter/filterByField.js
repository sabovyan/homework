function filterByField(users, field) {
	function getField(user) {
		if (user[field]) return user;
	}
	return users.filter(getField);
}

const users = [
	{
		username: 'Yuri Gagarin',
		lang: 'ru',
		isAstronaut: true,
	},
	{
		username: 'Nil Armstrong',
		lang: 'ENG',
		isAstronaut: true,
	},
	{
		username: 'Elon Musk',
		isAstronaut: false,
	},
];
filterByField(users, 'isAstronaut'); // [{ username: "Yuri Gagarin", lang: "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG" }]
