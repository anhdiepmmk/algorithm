const quadraticEquation = require('./quadratic-equation');

describe('solve-to-quadratic-equation', () => {
  test('should return -1 and -5 when given numbe1 = 1, number2 = 6,number3 = 5', () => {
    const number1 = 1;
    const number2 = 6;
    const number3 = 5;
    const expectedResult = { result1: -1, result2: -5 };
    const result = quadraticEquation.solveQuadraticEquation(
      number1,
      number2,
      number3,
    );
    expect(result).toEqual(expectedResult);
  });

  test('should return 3 when given numbe1 = 1, number2 = -6,number3 = 9', () => {
    const number1 = 1;
    const number2 = -6;
    const number3 = 9;
    const expectedResult = 3;
    const result = quadraticEquation.solveQuadraticEquation(
      number1,
      number2,
      number3,
    );
    expect(result).toBe(expectedResult);
  });

  test('should return "The equation has no solution." when given numbe1 = 1, number2 = -3,number3 = 10', () => {
    const number1 = 1;
    const number2 = -3;
    const number3 = 10;
    const expectedResult = 'The equation has no solution.';
    const result = quadraticEquation.solveQuadraticEquation(
      number1,
      number2,
      number3,
    );
    expect(result).toBe(expectedResult);
  });
});
