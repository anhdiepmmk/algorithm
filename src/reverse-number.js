function reverseNumber(n) {
  let number = n;
  let temp;
  let reversalNumber = 0;
  while (number > 0) {
    temp = number % 10;
    reversalNumber = reversalNumber * 10 + temp;
    number = Math.floor(number / 10);
  }
  return reversalNumber;
}

module.exports = {
  reverseNumber,
};
