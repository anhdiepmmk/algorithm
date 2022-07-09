const largestNumber = require('./largest-number');

describe('find the largest number', () => {
  test('should return 3 when given number1 = 1, number2 = 2, number3 = 3', () => {
    const number1 = 1;
    const number2 = 2;
    const number3 = 3;
    const expectedResult = 3;
    const result = largestNumber.findLargestNumber(number1, number2, number3);
    expect(result).toBe(expectedResult);
  });

  test('should return 22 when given number1 = -30.5, number2 = 22, number3 = -3', () => {
    const number1 = -30.5;
    const number2 = 22;
    const number3 = -3;
    const expectedResult = 22;
    const result = largestNumber.findLargestNumber(number1, number2, number3);
    expect(result).toBe(expectedResult);
  });

  test('should return 0 when given number1 = 0, number2 = 0, number3 = 0', () => {
    const number1 = 0;
    const number2 = 0;
    const number3 = 0;
    const expectedResult = 0;
    const result = largestNumber.findLargestNumber(number1, number2, number3);
    expect(result).toBe(expectedResult);
  });
});
