function solveQuadraticEquation(a, b, c) {
  let result1 = 0;
  let result2 = 0;
  const delta = b * b - 4 * a * c;
  if (delta > 0) {
    result1 = (-b + Math.sqrt(delta)) / (2 * a);
    result2 = (-b - Math.sqrt(delta)) / (2 * a);
    return { result1, result2 };
  }
  if (delta === 0) {
    return -b / (2 * a);
  }
  return 'The equation has no solution.';
}

module.exports = {
  solveQuadraticEquation,
};
