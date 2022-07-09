function drawFloyd(n) {
  let shape = '';
  let k = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      shape += k;
      ++k;
    }
    if (i !== n) {
      shape += '\n';
    }
  }
  return shape;
}

module.exports = {
  drawFloyd,
};
