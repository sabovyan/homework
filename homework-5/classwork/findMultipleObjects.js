const find = (arrOfObj, keys) => {
	const result = [];
	for (const val of arrOfObj) {
		result.push(val[keys]);
	}
	return result;
};

console.log(
	find(
		[
			{ user: 'name', age: 18 },
			{ user: 'elon', age: 18 },
			{ user: 'vrezh', age: 18 },
		],
		'user'
	)
);
