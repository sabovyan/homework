/**
 * getSumOfDigits(num) calculates summary of all the digits of the given number. If the summary is grater than ten getSumOfDigits(num) will also summarize also those digits
 * @param {number} num - an arbitrary number
 * @returns {number} summary of the digits
 * @example <caption>usage of getSumOfDigits(num)</caption>
 * getSumOfDigits(23) // returns 5
 * getSumOfDigits(29) // returns 2
 * getSumOfDigits(999999999999) // returns 9
 * getSumOfDigits(-45) // returns 9
 */

function getSumOfDigits(num) {
	let sum = 0;
	if (num < 0) {
		num = Math.abs(num);
	}
	if (num < 10) {
		return sum + num;
	}

	sum += num % 10;
	sum += getSumOfDigits((num - (num % 10)) / 10);
	if (sum > 9) {
		sum = getSumOfDigits(sum);
	}
	return sum;
}
getSumOfDigits(23);
getSumOfDigits(29);
getSumOfDigits(999999999999);
getSumOfDigits(-45);
