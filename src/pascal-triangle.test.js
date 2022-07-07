const pascalTriangle = require('./pascal-triangle');

describe('pascal triangle', () => {
	describe('pascal', () => {
		test('should return 1 when k = 0 and n = 0', () => {
			const k = 0;
			const n = 0;
			const expectedResult = 1;

			const result = pascalTriangle.pascal(k, n);

			expect(result).toBe(expectedResult);
		});

		test('should return 1 when k = 1 and n = 1', () => {
			const k = 1;
			const n = 1;
			const expectedResult = 1;

			const result = pascalTriangle.pascal(k, n);

			expect(result).toBe(expectedResult);
		});

		test('should return 2 when k = 1 and n = 2', () => {
			const k = 1;
			const n = 2;
			const expectedResult = 2;

			const result = pascalTriangle.pascal(k, n);

			expect(result).toBe(expectedResult);
		});
	});

	describe('drawPascalTriangle', () => {
		test('should draw pascal triangle when n = 2', () => {
			const n = 2;
			const expectedResult = `1\n11`;

			const result = pascalTriangle.drawPascalTriangle(n);

			expect(result).toBe(expectedResult);
		});

		test('should draw pascal triangle when n = 0', () => {
			const n = 0;
			const expectedResult = ``;

			const result = pascalTriangle.drawPascalTriangle(n);

			expect(result).toBe(expectedResult);
		});
	});
});
