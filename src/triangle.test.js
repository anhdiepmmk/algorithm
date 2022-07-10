const triangle = require('./triangle');

describe('triangle', () => {
  describe('draw', () => {
    test('should draw triangle when given height = 4', () => {
      const height = 4;
      const expectedResult = '*\n**\n***\n****';

      const result = triangle.draw(height);

      expect(result).toBe(expectedResult);
    });

    test('should draw triangle when given height = 0', () => {
      const height = 0;
      const expectedResult = '';

      const result = triangle.draw(height);

      expect(result).toBe(expectedResult);
    });

    test('should draw triangle when given height = -1', () => {
      const height = -1;
      const expectedResult = '';

      const result = triangle.draw(height);

      expect(result).toBe(expectedResult);
    });
  });
});
