const firstDegreeEquation = require('./first-degree-equation');

describe('solve-the-first-degree-equation', () => {
  test('should return 0.5 when given a = 5, b = 2', () => {
    const number1 = 5;
    const number2 = 2;
    const expectedResult = -0.4;
    const result = firstDegreeEquation.solveFirstDegreeEquation(
      number1,
      number2,
    );
    expect(result).toBe(expectedResult);
  });

  test('should return "The equation has infinitely many solutions" when given number1 = 0 && number2 = 0', () => {
    const number1 = 0;
    const number2 = 0;
    const expectedResult = 'The equation has infinitely many solutions';
    const result = firstDegreeEquation.solveFirstDegreeEquation(
      number1,
      number2,
    );
    expect(result).toBe(expectedResult);
  });

  test('should return 0 when given number1 !=0 && number2 = 0', () => {
    const number1 = 1;
    const number2 = 0;
    const expectedResult = 0;
    const result = firstDegreeEquation.solveFirstDegreeEquation(
      number1,
      number2,
    );
    expect(result).toBe(expectedResult);
  });

  test('should return the equation has no solution when given number1 = 0 && number2 != 0', () => {
    const number1 = 0;
    const number2 = 2;
    const expectedResult = 'The equation has no solutions';
    const result = firstDegreeEquation.solveFirstDegreeEquation(
      number1,
      number2,
    );
    expect(result).toBe(expectedResult);
  });
});
