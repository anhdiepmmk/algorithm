function draw(h) {
	let shape = '';
	for (let i = 1; i < h; i++) {
		for (let j = 0; j < i; j++) {
			shape += '*';
		}
		shape += '\n';
	}
	return shape;
}

console.log(draw(3));
