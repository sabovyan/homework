/**
 *  check if all the digits of the number is odd
 * @param {number} n - takes any arbitrary number
 * @returns {Boolean} - false if any of the digits of the number is even, otherwise it will return true
 * @example <caption>usage of symmetricDifference(set1, set2)</caption>
 * isOdd(0)  // returns false
 * isOdd(5)  // returns true
 * isOdd(-1) // throws a new error
 */

function isOdd(n) {
	if (n < 0) {
		throw new Error('Your number is negative😡');
	}
	if (n < 10) {
		if (n % 2 === 0) {
			return false;
		}
		return true;
	}
	const last = n % 10;

	if (last % 2 === 0) {
		return false;
	}
	return isOdd((n - last) / 10);
}
isOdd(135);
console.log(isOdd(-125));
