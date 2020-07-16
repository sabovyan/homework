function euclidean(a, b) {
	if (a % b === 0) {
		return b;
	}
	return euclidean(b, a % b);
}
console.log(euclidean(4, 6));

function lcm(a, b) {
	return (a * b) / euclidean(a, b);
}
console.log(lcm(2, 2));
