function calcFactorialNonRecursive(n) {
	if (n === 0) {
		return 1;
	} else {
		let element = 1;
		for (let i = 1; i <= n; i++) {
			element *= i;
		}
		return element;
	}
}

function calcFactorialByRecursive(n) {
	if (n === 0) {
		return 1;
	} else {
		n *= calcFactorialByRecursive(n - 1);
	}
	return n;
}

module.exports = {
	calcFactorialNonRecursive,
	calcFactorialByRecursive,
};
