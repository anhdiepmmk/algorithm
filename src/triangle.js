function draw(h) {
	let shape = '';
	for (let i = 1; i <= h; i++) {
		for (let j = 0; j < i; j++) {
			shape += '*';
		}
		if (i !== h) {
			shape += '\n';
		}
	}
	return shape;
}

module.exports = {
	draw,
};