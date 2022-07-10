function draw(h) {
  let shape = '';
  for (let i = 1; i <= h; i += 1) {
    for (let j = 0; j < i; j += 1) {
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
