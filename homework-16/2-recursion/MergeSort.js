/**
 *  merge(arr1, arr2) will merge two sorted arrays into one sorted. it is a helper function for the main sorting merge
 * @param {Array} arr1 - the first sorted array
 * @param {Array} arr2 - the secind sorted array
 * @returns {Array} merged two sorted arrays together
 * @example <caption>usage of merge(arr1, arr2) </caption>
 * merge([1, 2, 7, 99], [5, 13]) // returns [ 1, 2, 5, 7, 13, 99 ]
 */
function merge(arr1, arr2) {
	const res = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			res.push(arr1[i]);
			i += 1;
		} else {
			res.push(arr2[j]);
			j += 1;
		}
	}
	while (i < arr1.length) {
		res.push(arr1[i]);
		i += 1;
	}
	while (j < arr2.length) {
		res.push(arr2[j]);
		j += 1;
	}
	return res;
}

/**
 * mergeSort(arr) will take an unsorted array and returns sorted one
 * @param {Array} arr  an unsorted array
 * @returns {Array}  sorted array
 * @example <caption>usage of mergeSort(arr)</caption>
 * mergeSort([1, 3, 8, 10, 2, 4]) // returns [ 1, 2, 3, 4, 8, 10 ]
 */
function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	const middle = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, middle));
	const right = mergeSort(arr.slice(middle));
	return merge(left, right);
}
console.log(mergeSort([1, 3, 8, 10, 2, 4]));
