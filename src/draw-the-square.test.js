const square = require('./draw-the-square');

describe('the square', () => {
  describe('draw the solid square', () => {
    test('should draw the solid square when n=5', () => {
      const n = 5;
      const expectedResult = '*****\n*****\n*****\n*****\n*****';
      const result = square.drawSolidSquare(n);
      expect(result).toEqual(expectedResult);
    });
    test('should return "" when n=0', () => {
      const n = 0;
      const expectedResult = '';
      const result = square.drawSolidSquare(n);
      expect(result).toEqual(expectedResult);
    });
    test('should return "*" when n=1', () => {
      const n = 1;
      const expectedResult = '*';
      const result = square.drawSolidSquare(n);
      expect(result).toEqual(expectedResult);
    });
    test('should draw the solid square when n=2', () => {
      const n = 2;
      const expectedResult = '**\n**';
      const result = square.drawSolidSquare(n);
      expect(result).toEqual(expectedResult);
    });
    test('sshould draw the empty square when n=3', () => {
      const n = 3;
      const expectedResult = '***\n***\n***';
      const result = square.drawSolidSquare(n);
      expect(result).toEqual(expectedResult);
    });
  });
  describe('draw the empty square', () => {
    test('should return "" when n=0', () => {
      const n = 0;
      const expectedResult = '';
      const result = square.drawEmptySquare(n);
      expect(result).toEqual(expectedResult);
    });
    test('should return "*" when n=1', () => {
      const n = 1;
      const expectedResult = '*';
      const result = square.drawEmptySquare(n);
      expect(result).toEqual(expectedResult);
    });
    test('should draw the solid square when n=2', () => {
      const n = 2;
      const expectedResult = '**\n**';
      const result = square.drawEmptySquare(n);
      expect(result).toEqual(expectedResult);
    });
    test('sshould draw the empty square when n=3', () => {
      const n = 3;
      const expectedResult = '***\n* *\n***';
      const result = square.drawEmptySquare(n);
      expect(result).toEqual(expectedResult);
    });
    test('should draw the empty square when n=5', () => {
      const n = 5;
      const expectedResult = '*****\n*   *\n*   *\n*   *\n*****';
      const result = square.drawEmptySquare(n);
      expect(result).toEqual(expectedResult);
    });
  });
});
