function difference(set1, set2) {
	const fin = new Set();
	for (const val of set1) {
		if (!set2.has(val)) {
			fin.add(val);
		}
	}
	return fin;
}
const setA = new Set([1, 2, 3, 4]);
// const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);
difference(setA, setC);
