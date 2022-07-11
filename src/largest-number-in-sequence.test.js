const largestNumber = require('./largest-number-in-sequence');

describe('find the largest number in sequence', () => {
  test('should return -Infinity when given numbers = [];', () => {
    const numbers = [];
    const expectedResult = -Infinity;
    const result = largestNumber.findLargestNumber(numbers);
    expect(result).toBe(expectedResult);
  });
  test('should return 300 when given numbers = [-1, 4, 2, 4, 6, 3, 1, 6, 7, 5, 300, 22, 100];', () => {
    const numbers = [-1, 4, 2, 4, 6, 3, 1, 6, 7, 5, 300, 22, 100];
    const expectedResult = 300;
    const result = largestNumber.findLargestNumber(numbers);
    expect(result).toBe(expectedResult);
  });

  test('should return 100 when given numbers = [-1, 4, 2, 4, 6, 3, 1, 6, 7, 5, 33, 22, 100];', () => {
    const numbers = [-1, 4, 2, 4, 6, 3, 1, 6, 7, 5, 33, 22, 100];
    const expectedResult = 100;
    const result = largestNumber.findLargestNumber(numbers);
    expect(result).toBe(expectedResult);
  });
});
