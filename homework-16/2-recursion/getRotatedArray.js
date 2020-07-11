/**
 * Given an array and a number N.
 * Write a recursive function that rotates an array N places to the left.
 * (Hint: to add element to the beginning use arr.unshift())
 * @param {Array} arr - takes an array
 * @param {number} num - takes a number
 * @returns {Array} - a reordered array
 * @example <caption>usage of getRotatedArray(arr, num)</caption>
 * getRotatedArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3);
 * // returns ['d', 'e', 'f', 'g', 'h', 'a', 'b', 'c']
 * getRotatedArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2);
 * // returns [ 'g', 'h', 'a', 'b', 'c', 'd', 'e', 'f']
 */

function getRotatedArray(arr, num) {
	/**
	 * the inner function of getRotatedArray
	 * @param {Array} innnerArr - takes an array from the outer function
	 * @param {number} innerNum - takes a number from the outer function
	 * @param {number} count - restricts the quantity of the recursive function
	 * @returns {Array} - a reordered array
	 */

	function rotateArray(innnerArr, innerNum, count = 0) {
		const res = innnerArr.slice(0, innerNum);
		if (count === 1) {
			return res;
		}
		res.unshift(innnerArr.slice(innerNum));
		count += 1;
		res.concat(rotateArray(innnerArr.slice(innerNum), innerNum, count));
		return res.flat();
	}

	return rotateArray(arr, num);
}

console.log(getRotatedArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));
console.log(getRotatedArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));
