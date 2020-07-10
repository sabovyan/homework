/**
 *	getMinPositive() will find minimal positive number
 * @param {Array} arr - an array of arbitrary numbers
 * @returns {number} - the minimal positive number of the given array
 * @example <caption>Usage of minPositive.js</caption>
 * getMinPositive([56, -9, 87, -23, 0, -105, 55, 1]); // returns 0
 * getMinPositive([45, -9, 15, 5, -78]); // returns 5
 * getMinPositive([-5, -9, -111, -1000, -7]); // returns -1
 */

function getMinPositive(arr) {
	function inner(inerArr, res = arr[0]) {
		if (inerArr.length === 1) {
			if (res < 0) {
				return -1;
			}
			return res;
		}
		if (res > inerArr[1] && inerArr[1] >= 0) {
			res = inerArr[1];
		}
		return inner(inerArr.slice(1), res);
	}
	return inner(arr);
}
console.log(getMinPositive([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(getMinPositive([45, -9, 15, 5, -78]));
console.log(getMinPositive([-5, -9, -111, -1000, -7]));
