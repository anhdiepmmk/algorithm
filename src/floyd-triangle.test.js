const triangle = require('./floyd-triangle');

describe('Floyd triangle', () => {
  describe('draw', () => {
    test('should draw in floyd triangle when given height = 4', () => {
      const height = 4;
      const expectedResult = `1\n23\n456\n78910`;
      const result = triangle.drawFloyd(height);
      expect(result).toBe(expectedResult);
    });

    test('should draw in floyd triangle when given height = 0', () => {
      const height = 0;
      const expectedResult = ``;
      const result = triangle.drawFloyd(height);
      expect(result).toBe(expectedResult);
    });
  });
});
