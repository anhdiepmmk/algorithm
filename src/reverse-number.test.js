const reversalNumber = require('./reverse-number');

describe('reverse-number', () => {
  test('should return 654321 when given n = 123456', () => {
    const n = 123456;
    const expectedResult = 654321;

    const result = reversalNumber.reverseNumber(n);

    expect(result).toBe(expectedResult);
  });

  test('should return 654321 when given n = 1234560', () => {
    const n = 1234560;
    const expectedResult = 654321;

    const result = reversalNumber.reverseNumber(n);

    expect(result).toBe(expectedResult);
  });

  test('should return 321 when given n = 123', () => {
    const n = 123;
    const expectedResult = 321;

    const result = reversalNumber.reverseNumber(n);

    expect(result).toBe(expectedResult);
  });

  test('should return 21 when given n = 12', () => {
    const n = 12;
    const expectedResult = 21;

    const result = reversalNumber.reverseNumber(n);

    expect(result).toBe(expectedResult);
  });

  test('should return 1 when given n = 1', () => {
    const n = 1;
    const expectedResult = 1;

    const result = reversalNumber.reverseNumber(n);

    expect(result).toBe(expectedResult);
  });

  test('should return 0 when given n = 0', () => {
    const n = 0;
    const expectedResult = 0;

    const result = reversalNumber.reverseNumber(n);

    expect(result).toBe(expectedResult);
  });
});
