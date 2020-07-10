/**
 * A function that will remove the first element from the array
 * @param {array} arr  an array of different values
 * @returns {array}  - a new array without the first element
 * @example <caption>usage of removeFirstElem(arr)</caption>
 * removeFirstElem([6, 78, 'n', 0, 1]); //returns [ 78, 'n', 0, 1 ]
 * removeFirstElem([5]) // returns []
 * removeFirstElem([]) // returns []
 */

function removeFirstElem(arr) {
	let newArr = [];
	if (arr.length === 1) {
		return newArr;
	}
	if (arr.length === 0) {
		return newArr;
	}
	newArr.push(arr[1]);
	newArr = newArr.concat(removeFirstElem(arr.slice(1)));
	return newArr;
}

removeFirstElem([6, 78, 'n', 0, 1]);
