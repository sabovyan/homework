/**
 *
 * @param {array} arr it accepts an array of any values,
 * @returns {array} - whereas all the values are inside of one flat array
 * @example <caption> usage of recursiveFlat(arr)</caption>
 * recursiveFlat([1, [3, 4, [1, 2]], 10]); // returns [ 1, 3, 4, 1, 2, 10 ]
 * recursiveFlat([14, [1, [[[3, []]], 1], 0]]); // returns [ 14, 1, 3, 1, 0 ]
 */

function recursiveFlat(arr) {
	function recConcat(mainArr, newArr = []) {
		if (mainArr.length === 0) {
			return newArr;
		}
		if (!(mainArr[0] instanceof Array)) {
			newArr.push(mainArr[0]);
		} else {
			newArr = newArr.concat(recConcat(mainArr[0]));
		}

		newArr = newArr.concat(recConcat(mainArr.slice(1)));
		return newArr;
	}
	return recConcat(arr);
}
console.log(recursiveFlat([1, [3, 4, [1, 2]], 10]));
console.log(recursiveFlat([14, [1, [[[3, []]], 1], 0]]));
