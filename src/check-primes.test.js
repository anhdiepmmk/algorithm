const primeNumber = require('./check-primes');

describe('check-primes', () => {
  test('should return true when given 5', () => {
    const n = 5;
    const expectedResult = true;
    const result = primeNumber.isPrimeNumber(n);

    expect(result).toBe(expectedResult);
  });
  test('should return true when given 59', () => {
    const n = 59;
    const expectedResult = true;
    const result = primeNumber.isPrimeNumber(n);

    expect(result).toBe(expectedResult);
  });
  test('should return true when given 113', () => {
    const n = 113;
    const expectedResult = true;
    const result = primeNumber.isPrimeNumber(n);

    expect(result).toBe(expectedResult);
  });
  test('should return false when given 0', () => {
    const n = 0;
    const expectedResult = false;
    const result = primeNumber.isPrimeNumber(n);

    expect(result).toBe(expectedResult);
  });
  test('should return false when given 1', () => {
    const n = 1;
    const expectedResult = false;
    const result = primeNumber.isPrimeNumber(n);

    expect(result).toBe(expectedResult);
  });
  test('should return false when given 100', () => {
    const n = 100;
    const expectedResult = false;
    const result = primeNumber.isPrimeNumber(n);

    expect(result).toBe(expectedResult);
  });
  test('should return false when given 123', () => {
    const n = 123;
    const expectedResult = false;
    const result = primeNumber.isPrimeNumber(n);

    expect(result).toBe(expectedResult);
  });
});
