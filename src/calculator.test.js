const caculatorService = require('./calculator');

describe('calculate', () => {
  test('given invalid elements then throw an error', () => {
    expect(() => caculatorService.calculate([1, 2, 1])).toThrowError(
      new Error(`there are some invalid elements ${JSON.stringify([1, 2, 1])}`),
    );
  });

  describe('simple', () => {
    test('should return 2', () => {
      expect(caculatorService.calculate([1, '+', 1])).toBe(2);
    });

    test('should return 0', () => {
      expect(caculatorService.calculate([1, '-', 1])).toBe(0);
    });

    test('should return 4', () => {
      expect(caculatorService.calculate([2, 'x', 2])).toBe(4);
    });

    test('should return 0.5', () => {
      expect(caculatorService.calculate([1, '/', 2])).toBe(0.5);
    });
  });

  describe('priority', () => {
    test('should return 21', () => {
      expect(caculatorService.calculate([3, '+', 3, 'x', 6])).toBe(21);
    });

    test('should return 31', () => {
      expect(caculatorService.calculate([3, '+', 4, 'x', 7])).toBe(31);
    });

    test('should return 26', () => {
      expect(caculatorService.calculate([6, '+', 4, 'x', 5])).toBe(26);
    });

    test('should return 10', () => {
      expect(caculatorService.calculate([5, 'x', 6, '/', 3])).toBe(10);
    });
  });
});

describe('combine', () => {
  test('should return a value', () => {
    expect(caculatorService.combine(1, 2, '+')).toBe(3);
    expect(caculatorService.combine(2, 2, '-')).toBe(0);
    expect(caculatorService.combine(3, 2, 'x')).toBe(6);
    expect(caculatorService.combine(1, 2, '/')).toBe(0.5);
  });

  test('given invalid operator then throw an error', () => {
    expect(() => caculatorService.combine(1, 2, '*')).toThrowError(
      new Error('Invalid operator: *'),
    );
  });
});
