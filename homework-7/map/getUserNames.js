/* eslint-disable no-console */
function getUserNames(arr) {
	function findUserNames(value) {
		return value.username;
	}
	return arr.map(findUserNames);
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
console.log(getUserNames(users)); // ['Yuri Gagarin', 'Nil Armstrong']
