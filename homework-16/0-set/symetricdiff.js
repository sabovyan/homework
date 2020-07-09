// @ts-nocheck
/**
 * @file symmetricdiff.js
 * @see <a href="https://repl.it/@vrezhhovanisyan/algorithms#set_map/Set.js">assignment</a>
 */

/**
 * Checking the difference between two sets
 * @param {set} set1 -fist set
 * @param {set} set2 -second set
 * @returns {set} - union of (set1 - set2) and (set2 - set1)
 * @example <caption>Example usage of symmetricDifference(set1, set2)</caption>
 * const setA = new Set([1, 2, 3, 4]);
 * const setC = new Set([3, 4, 5, 6]);
 * symadifference(setA, setC);
 * // returns Set { 1, 2, 5, 6 }
 */
function symmetricDifference(set1, set2) {
	const fin = new Set();
	for (const val of set1) {
		if (!set2.has(val)) {
			fin.add(val);
		}
	}
	for (const val of set2) {
		if (!set1.has(val)) {
			fin.add(val);
		}
	}
	return fin;
}

const setA = new Set([1, 2, 3, 4]);
// const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);
symmetricDifference(setA, setC); // => Set [1, 2, 5, 6]
