function solveQuadraticEquation(number1, number2, number3) {
  let result1 = 0;
  let result2 = 0;
  let delta = number2 * number2 - 4 * number1 * number3;
  if (delta > 0) {
    result1 = (-number2 + Math.sqrt(delta)) / (2 * number1);
    result2 = (-number2 - Math.sqrt(delta)) / (2 * number1);
    return { result1, result2 };
  } else if (delta === 0) {
    return -number2 / (2 * number1);
  } else {
    return 'The equation has no solution.';
  }
}

module.exports = {
  solveQuadraticEquation,
};
