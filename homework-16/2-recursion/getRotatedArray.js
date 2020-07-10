function getRotatedArray(arr, num) {
	let res = [];
	/* if (num === 0) {
		return res;
	} */
	res = arr.splice(0, num);
	console.log(arr);
	return res;
}

console.log(getRotatedArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));
// console.log(getRotatedArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));
