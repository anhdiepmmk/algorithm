function drawIsoscelesTriangle(h) {
  let shape = '';
  for (let i = 1; i <= h; i += 1) {
    // print space
    for (let j = 1; j <= h - i; j += 1) {
      shape += ' ';
    }
    // print star "*"
    for (let k = 1; k <= 2 * i - 1; k += 1) {
      shape += '*';
    }
    if (i !== h) {
      shape += '\n';
    }
  }
  return shape;
}
module.exports = {
  drawIsoscelesTriangle,
};
