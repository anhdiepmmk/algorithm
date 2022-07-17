function solveFirstDegreeEquation(number1, number2) {
  if (number1 === 0 && number2 === 0) {
    return 'The equation has infinitely many solutions';
  }

  if (number1 !== 0 && number2 === 0) {
    return 0;
  }

  if (number1 === 0 && number2 !== 0) {
    return 'The equation has no solutions';
  }

  return -number2 / number1;
}

module.exports = {
  solveFirstDegreeEquation,
};
