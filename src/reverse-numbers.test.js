const reverse = require('./reverse-numbers');

describe('reverseNumbers', () => {
  test('return an array of reverse numbers when given an array of numbers', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const expectedResult = '654321';

    const result = reverse.reverseNumbers(numbers);
    expect(result).toBe(expectedResult);
  });
});
