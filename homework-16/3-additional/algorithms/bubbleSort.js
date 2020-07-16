const numbers = [6, 1, 2, 3, 4, 5];

/**
 * Swap is going to swap two items of an array
 * @param {Array} arr
 * @param {Number} idx1 the first index of an item
 * @param {Number} idx2 the second index of an item
 * @returns {void}
 */
const swap = (arr, idx1, idx2) => {
	[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

/**
 *  implementation of Bubble Sort
 * @param {Array} items - takes an array
 * @returns {Array} - returns the same array with sorted items
 * @example <caption>usage of bubbleSort(items)</caption>
 * bubbleSort(numbers); // returns [1, 2, 3, 4, 5, 6]
 */
const bubbleSort = (items) => {
	const size = items.length;
	let noswaps;
	for (let i = size; i > 0; i -= 1) {
		noswaps = true;
		for (let j = 0; j < i - 1; j += 1) {
			console.log(items, items[j], items[j + 1]);
			if (items[j] > items[j + 1]) {
				swap(items, j, j + 1);
				noswaps = false;
			}
		}
		if (noswaps) break;
	}
	return items;
};
bubbleSort(numbers); // [1, 2, 3, 4, 5, 6]
