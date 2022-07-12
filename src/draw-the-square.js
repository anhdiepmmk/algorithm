function drawSolidSquare(n) {
  let shape = '';
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      shape += '*';
    }
    if (i !== n) {
      shape += '\n';
    }
  }
  return shape;
}

function drawEmptySquare(n) {
  let shape = '';
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      if (i === 1 || i === n || j === 1 || j === n) {
        shape += '*';
      } else {
        shape += ' ';
      }
    }
    if (i !== n) {
      shape += '\n';
    }
  }
  return shape;
}

module.exports = {
  drawSolidSquare,
  drawEmptySquare,
};
