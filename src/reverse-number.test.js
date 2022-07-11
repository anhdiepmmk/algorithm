const reverseNumber = require('./reverse-number');

describe('reverse-number', () => {
  test('should return 654321 when given n = 123456', () => {
    const n = 123456;
    const expectedResult = 654321;

    const result = reverseNumber.returnReverseNumber(n);

    expect(result).toBe(expectedResult);
  });

  test('should return 654321 when given n = 1234560', () => {
    const n = 1234560;
    const expectedResult = 654321;

    const result = reverseNumber.returnReverseNumber(n);

    expect(result).toBe(expectedResult);
  });
});
