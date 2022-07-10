function swap(n1, n2) {
  let number1 = n1;
  let number2 = n2;
  number1 += number2;
  number2 = number1 - number2;
  number1 -= number2;
  return { number1, number2 };
}

module.exports = {
  swap,
};
