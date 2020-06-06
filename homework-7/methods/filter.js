function filterMethod(arr, func) {
	const newArr = [];
	for (let i = 0; i < arr.length; i += 1) {
		if (func.call(arr, arr[i], i, arr)) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
