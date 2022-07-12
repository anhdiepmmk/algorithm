const primeNumber = require('./check-primes');

describe('check-primes', () => {
  test('should return true when given a prime number', () => {
    const n = 5;
    const expectedResult = true;
    const result = primeNumber.checkPrimeNumber(n);

    expect(result).toBe(expectedResult);
  });

  test('should return true when given a prime number', () => {
    const n = 59;
    const expectedResult = true;
    const result = primeNumber.checkPrimeNumber(n);

    expect(result).toBe(expectedResult);
  });

  test('should return true when given a prime number', () => {
    const n = 113;
    const expectedResult = true;
    const result = primeNumber.checkPrimeNumber(n);

    expect(result).toBe(expectedResult);
  });

  test('should return false when given a number that is not prime', () => {
    const n = 0;
    const expectedResult = false;
    const result = primeNumber.checkPrimeNumber(n);

    expect(result).toBe(expectedResult);
  });

  test('should return false when given a number that is not prime', () => {
    const n = 1;
    const expectedResult = false;
    const result = primeNumber.checkPrimeNumber(n);

    expect(result).toBe(expectedResult);
  });

  test('should return false when given a number that is not prime', () => {
    const n = 100;
    const expectedResult = false;
    const result = primeNumber.checkPrimeNumber(n);

    expect(result).toBe(expectedResult);
  });

  test('should return false when given a number that is not prime', () => {
    const n = 123;
    const expectedResult = false;
    const result = primeNumber.checkPrimeNumber(n);

    expect(result).toBe(expectedResult);
  });
});
