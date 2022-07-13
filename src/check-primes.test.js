const primeNumber = require('./check-primes');

describe('check-primes', () => {
  test.each([
    { n: 3, expected: true },
    { n: 5, expected: true },
    { n: 59, expected: true },
    { n: 113, expected: true },
  ])('should return true when given $n', ({ n, expected }) => {
    expect(primeNumber.isPrimeNumber(n)).toEqual(expected);
  });
  test.each([
    { n: 0, expected: false },
    { n: 1, expected: false },
    { n: 100, expected: false },
    { n: 123, expected: false },
  ])('should return false when given $n', ({ n, expected }) => {
    expect(primeNumber.isPrimeNumber(n)).toEqual(expected);
  });
});
