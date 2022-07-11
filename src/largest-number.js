function findLargestNumber(number1, number2, number3) {
  if (number1 >= number2 && number1 >= number3) {
    return number1;
  }
  if (number2 >= number1 && number2 >= number3) {
    return number2;
  }
  return number3;
}

function getLargestNumber(number1, number2, number3) {
  let max = number1;
  if (number2 > max) {
    max = number2;
  }
  if (number3 > max) {
    max = number3;
  }
  return max;
}

module.exports = {
  findLargestNumber,
  getLargestNumber,
};
