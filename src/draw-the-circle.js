const drawCircle = (radius) => {
  const symbol = '*';
  let result = '';
  for (let y = radius; y >= -radius; y -= 1) {
    for (let x = radius; x >= -radius; x -= 1) {
      const value = x ** 2 + y ** 2 - rqadius ** 2;
      if (value < 0) {
        result += symbol;
      }
      if (value === 0) {
        result += '-';
      }
      if (value > 0) {
        result += '.';
      }
    }
    if (y !== -radius) {
      result += '\n';
    }
  }
  return result;
};

module.exports = {
  drawCircle,
};
