const fibonacci = require('./print-the-sequence-of-fibonacci');

describe('print-the-sequence-of-fibonacci', () => {
  test('should return the sequence of fibonacci when given a number', () => {
    const number = 5;
    const expectedResult = [0, 1, 1, 2, 3, 5];
    const result = fibonacci.getFibonacciSequences(number);
    expect(result).toEqual(expectedResult);
  });

  test('should return the sequence of fibonacci when given a number', () => {
    const number = 0;
    const expectedResult = [0, 1];
    const result = fibonacci.getFibonacciSequences(number);
    expect(result).toEqual(expectedResult);
  });

  test('should return the sequence of fibonacci when given a number', () => {
    const number = 1;
    const expectedResult = [0, 1, 1];
    const result = fibonacci.getFibonacciSequences(number);
    expect(result).toEqual(expectedResult);
  });

  test('should return the sequence of fibonacci when given a number', () => {
    const number = 2;
    const expectedResult = [0, 1, 1, 2];
    const result = fibonacci.getFibonacciSequences(number);
    expect(result).toEqual(expectedResult);
  });

  test('should return the sequence of fibonacci when given a number', () => {
    const number = 3;
    const expectedResult = [0, 1, 1, 2, 3];
    const result = fibonacci.getFibonacciSequences(number);
    expect(result).toEqual(expectedResult);
  });
});
