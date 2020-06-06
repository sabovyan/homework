function parseInteger(arr) {
	function getparsedInteger(str) {
		return parseInt(str, 10);
	}
	return arr.map(getparsedInteger);
}
console.log(parseInteger(['1', '2', '34'])); // [1, 2, 34];
console.log(parseInteger(['1', 'px', '2323'])); // [1, null, 2323];
