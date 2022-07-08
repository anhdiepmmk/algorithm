const triangle = require('./inverted-triangle');

describe('inverted-triangle', () => {
	describe('draw', () => {
		test('should draw in inverted triangle when given height = 3', () => {
			const height = 3;
			const expectedResult = `*****\n ***\n  *\n`;
			const result = triangle.drawInvertedTriangle(height);
			expect(result).toBe(expectedResult);
		});

		test('should draw in inverted triangle when given height = 0', () => {
			const height = 0;
			const expectedResult = ``;
			const result = triangle.drawInvertedTriangle(height);
			expect(result).toBe(expectedResult);
		});

		test('should draw in inverted triangle when given height = -1', () => {
			const height = -1;
			const expectedResult = ``;
			const result = triangle.drawInvertedTriangle(height);
			expect(result).toBe(expectedResult);
		});
	});
});
