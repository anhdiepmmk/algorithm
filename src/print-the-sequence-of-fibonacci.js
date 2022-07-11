function getFibonacciSequences(number) {
  const fibonacciSequences = [];
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  fibonacciSequences.push(n1);
  fibonacciSequences.push(n2);
  nextTerm = n1 + n2;
  while (nextTerm <= number) {
    fibonacciSequences.push(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
  }
  return fibonacciSequences;
}

module.exports = {
  getFibonacciSequences,
};
