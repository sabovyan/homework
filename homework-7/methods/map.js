// eslint-disable-next-line no-unused-vars
function mapMethod(arr, func) {
	const newArr = [];
	for (let i = 0; i < arr.length; i += 1) {
		const element = func.call(arr, arr[i], i, arr);
		newArr.push(element);
	}
	return newArr;
}
