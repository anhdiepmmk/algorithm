function swap2Numbers(a, b) {
	a = a + b;
	b = a - b;
	a = a - b;
	return { a, b };
}

console.log(swap2Numbers(5, 6));
