const drawCircle = (radius) => {
  const thickness = 0.5;
  const symbol = '*';
  const rin = radius - thickness;
  const rout = radius + thickness;
  let string = '';
  for (let y = radius; y >= -radius; y -= 1) {
    for (let x = -radius; x < rout; x += 0.4) {
      const value = x * x + y * y;
      if (value >= rin * rin && value <= rout * rout) {
        string += symbol;
      } else {
        string += ' ';
      }
    }
    if (y !== -radius) {
      string += '\n';
    }
  }
  return string;
};

module.exports = {
  drawCircle,
};
