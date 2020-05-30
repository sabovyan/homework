const compareString = (str1, str2) => {
	const arrOfAnswers = [];
	for (let i = 0; i < str1.length; i += 1) {
		arrOfAnswers.push(
			str1[i].trim().toLowerCase() === str2[i].trim().toLowerCase()
		);
	}
	return arrOfAnswers;
};

console.log(
	compareString(['Name', 'naMe', 'vrEzh'], ['  NaMe ', 'name', 'vrezh'])
); // [true, true, true];
