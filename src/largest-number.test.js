const largestNumber = require('./largest-number');

describe('find the largest number', () => {
  describe('find the largest number case 1', () => {
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

    test('should return 100 when given number1 = 100, number2 = 50, number3 = 90', () => {
      const number1 = 100;
      const number2 = 50;
      const number3 = 90;
      const expectedResult = 100;
      const result = largestNumber.findLargestNumber(number1, number2, number3);
      expect(result).toBe(expectedResult);
    });

    test('should return 300 when given number1 = 300, number2 = 300, number3 = 100', () => {
      const number1 = 300;
      const number2 = 300;
      const number3 = 100;
      const expectedResult = 300;
      const result = largestNumber.findLargestNumber(number1, number2, number3);
      expect(result).toBe(expectedResult);
    });

    test('should return 200 when given number1 = 100, number2 = 200, number3 = 200', () => {
      const number1 = 100;
      const number2 = 200;
      const number3 = 200;
      const expectedResult = 200;
      const result = largestNumber.findLargestNumber(number1, number2, number3);
      expect(result).toBe(expectedResult);
    });

    test('should return 10 when given number1 = 10, number2 = 2, number3 = 10', () => {
      const number1 = 10;
      const number2 = 2;
      const number3 = 10;
      const expectedResult = 10;
      const result = largestNumber.findLargestNumber(number1, number2, number3);
      expect(result).toBe(expectedResult);
    });
  });

  describe('find the largest number case 2', () => {
    test('should return 3 when given number1 = 1, number2 = 2, number3 = 3', () => {
      const number1 = 1;
      const number2 = 2;
      const number3 = 3;
      const expectedResult = 3;
      const result = largestNumber.getLargestNumber(number1, number2, number3);
      expect(result).toBe(expectedResult);
    });

    test('should return 22 when given number1 = -30.5, number2 = 22, number3 = -3', () => {
      const number1 = -30.5;
      const number2 = 22;
      const number3 = -3;
      const expectedResult = 22;
      const result = largestNumber.getLargestNumber(number1, number2, number3);
      expect(result).toBe(expectedResult);
    });

    test('should return 0 when given number1 = 0, number2 = 0, number3 = 0', () => {
      const number1 = 0;
      const number2 = 0;
      const number3 = 0;
      const expectedResult = 0;
      const result = largestNumber.getLargestNumber(number1, number2, number3);
      expect(result).toBe(expectedResult);
    });

    test('should return 100 when given number1 = 100, number2 = 50, number3 = 90', () => {
      const number1 = 100;
      const number2 = 50;
      const number3 = 90;
      const expectedResult = 100;
      const result = largestNumber.getLargestNumber(number1, number2, number3);
      expect(result).toBe(expectedResult);
    });

    test('should return 300 when given number1 = 300, number2 = 300, number3 = 100', () => {
      const number1 = 300;
      const number2 = 300;
      const number3 = 100;
      const expectedResult = 300;
      const result = largestNumber.getLargestNumber(number1, number2, number3);
      expect(result).toBe(expectedResult);
    });

    test('should return 200 when given number1 = 100, number2 = 200, number3 = 200', () => {
      const number1 = 100;
      const number2 = 200;
      const number3 = 200;
      const expectedResult = 200;
      const result = largestNumber.getLargestNumber(number1, number2, number3);
      expect(result).toBe(expectedResult);
    });

    test('should return 10 when given number1 = 10, number2 = 2, number3 = 10', () => {
      const number1 = 10;
      const number2 = 2;
      const number3 = 10;
      const expectedResult = 10;
      const result = largestNumber.getLargestNumber(number1, number2, number3);
      expect(result).toBe(expectedResult);
    });
  });
});
