const calculation = require('./factorial-of-a-number');

describe('factorial-of-a-number', () => {
  describe('non-recursive-calculate', () => {
    test('should return 120 when given n = 5', () => {
      const number = 5;
      const expectedResult = 120;
      const result = calculation.calcFactorialNonRecursive(number);
      expect(result).toBe(expectedResult);
    });

    test('should return 1 when given n = 0', () => {
      const number = 0;
      const expectedResult = 1;
      const result = calculation.calcFactorialNonRecursive(number);
      expect(result).toBe(expectedResult);
    });
  });
  describe('recursive-calculation', () => {
    test('should return 120 when given n = 5', () => {
      const number = 5;
      const expectedResult = 120;
      const result = calculation.calcFactorialByRecursive(number);
      expect(result).toBe(expectedResult);
    });

    test('should return 1 when given n = 0', () => {
      const number = 0;
      const expectedResult = 1;
      const result = calculation.calcFactorialByRecursive(number);
      expect(result).toBe(expectedResult);
    });
  });
});
