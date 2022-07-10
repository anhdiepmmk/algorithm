function drawFloyd(n) {
  let shape = '';
  let k = 1;
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= i; j += 1) {
      shape += k;
      k += 1;
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
