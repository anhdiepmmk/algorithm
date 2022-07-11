const fibonacci = require('./print-the-sequence-of-fibonacci');

describe('print-the-sequence-of-fibonacci', () => {
  test('should return the sequence of fibonacci when given a number', () => {
    const number = 5;
    const expectedResult = [0, 1, 1, 2, 3, 5];
    const result = fibonacci.getFibonacci(number);
    expect(result).toEqual(expectedResult);
  });
});
