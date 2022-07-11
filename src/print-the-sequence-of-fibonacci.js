function getFibonacci(number) {
  const newNumbers = [];
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  newNumbers.push(n1);
  newNumbers.push(n2);
  nextTerm = n1 + n2;
  while (nextTerm <= number) {
    newNumbers.push(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
  }
  return newNumbers;
}

module.exports = {
  getFibonacci,
};
