function drawInvertedTriangle(n) {
  let shape = '';
  for (let i = n; i > 0; i -= 1) {
    for (let j = n; j > i; j -= 1) {
      shape += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k += 1) {
      shape += '*';
    }
    shape += '\n';
  }
  return shape;
}

module.exports = {
  drawInvertedTriangle,
};
