const largestNumber = require('./largest-number-in-sequence');

describe('find the largest number in sequence', () => {
  test('should return 300 when given numberArray = [-1, 4, 2, 4, 6, 3, 1, 6, 7, 5, 300, 22, 100];', () => {
    const numberArray = [-1, 4, 2, 4, 6, 3, 1, 6, 7, 5, 300, 22, 100];
    const expectedResult = 300;
    const result = largestNumber.findLargestNumber(numberArray);
    expect(result).toBe(expectedResult);
  });

  test('should return 100 when given numberArray = [-1, 4, 2, 4, 6, 3, 1, 6, 7, 5, 33, 22, 100];', () => {
    const numberArray = [-1, 4, 2, 4, 6, 3, 1, 6, 7, 5, 33, 22, 100];
    const expectedResult = 100;
    const result = largestNumber.findLargestNumber(numberArray);
    expect(result).toBe(expectedResult);
  });
});
