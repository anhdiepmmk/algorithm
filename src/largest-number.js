function findLargestNumber(number1, number2, number3) {
  if (number1 >= number2 && number1 >= number3) {
    return number1;
  } else if (number2 >= number1 && number2 >= number3) {
    return number2;
  } else {
    return number3;
  }
}

module.exports = {
  findLargestNumber,
};
