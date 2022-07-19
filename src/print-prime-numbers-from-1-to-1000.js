const prime = require('./check-primes');

function printPrime(n) {
  const result = [];
  for (let i = 1; i <= n; i += 1) {
    if (prime.isPrimeNumber(i)) result.push(i);
  }
  return result;
}

module.exports = {
  printPrime,
};
