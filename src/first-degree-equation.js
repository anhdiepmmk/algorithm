function solveFirstDegreeEquation(number1, number2) {
  let result = 0;
  if (number1 === 0 && number2 === 0) {
    return 'The equation has infinitely many solutions';
  } else if (number1 !== 0 && number2 === 0) {
    return 0;
  } else if (number1 === 0 && number2 !== 0) {
    return 'The equation has no solutions';
  } else return -number2 / number1;
}

module.exports = {
  solveFirstDegreeEquation,
};
