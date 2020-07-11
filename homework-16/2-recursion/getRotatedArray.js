function getRotatedArray(arr, num) {
	function rotateArray(arr, num, res, count = 0) {
		if (count === 1) {
			return res;
		}
		res.unshift(arr.slice(num));
		count++;
		res.concat(rotateArray(arr.slice(num), num, res, count));
		return res.flat();
	}

	return rotateArray(arr, num, arr.slice(0, num));
}

console.log(getRotatedArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 7));
console.log(getRotatedArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));
