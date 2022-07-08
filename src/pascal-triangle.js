function pascal(k, n) {
  if (k == 0 || k == n) {
    return 1;
  } else {
    return pascal(k, n - 1) + pascal(k - 1, n - 1);
  }
}

function drawPascalTriangle(n) {
  let shape = '';
  for (let i = 0; i < n; i++) {
    for (let k = 0; k <= i; k++) {
      shape += pascal(k, i);
    }
    if (i !== n - 1) {
      shape += '\n';
    }
  }
  return shape;
}
module.exports = {
  pascal,
  drawPascalTriangle,
};
