function solveFirstDegreeEquation(number1, number2) {
  let result = '';
  let temp = 0;
  if (number1 === 0 && number2 === 0) {
    return result;
  } else if (number1 !== 0 && number2 === 0) {
    result += temp;
  } else if (number1 === 0 && number2 !== 0) {
    return result;
  } else {
    temp = -number2 / number1;
    result += temp;
  }
  return result;
}

module.exports = {
  solveFirstDegreeEquation,
};
