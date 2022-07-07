function drawInvertedTriangle(n) {
	let shape = '';
	for (let i = n; i > 0; i--) {
		for (let j = n; j > i; j--) {
			shape += ' ';
		}
		for (let k = 1; k <= 2 * i - 1; k++) {
			shape += '*';
		}
		shape += '\n';
	}
	return shape;
}

// module.exports = {
// 	drawInvertedTriangle,
// }

console.log(drawInvertedTriangle(3));
