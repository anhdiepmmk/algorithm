function returnReverseNumber(n) {
  let number = n;
  let temp;
  let reverseNumber = 0;
  while (number > 0) {
    temp = number % 10;
    reverseNumber = reverseNumber * 10 + temp;
    number = Math.floor(number / 10);
  }
  return reverseNumber;
}

module.exports = {
  returnReverseNumber,
};
