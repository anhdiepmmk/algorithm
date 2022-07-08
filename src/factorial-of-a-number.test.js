const calculation = require('./factorial-of-a-number');

describe('factorial-of-a-number', () => {
	describe('non-recursive-calculate', () => {
		test('calculate the factorial of a number when given N = 5', () => {
			const number = 5;
			const expectedResult = 120;
			const result = calculation.calcFactorialNonRecursive(number);
			expect(result).toBe(expectedResult);
		});

		test('calculate the factorial of a number when given N = 0', () => {
			const number = 0;
			const expectedResult = 1;
			const result = calculation.calcFactorialNonRecursive(number);
			expect(result).toBe(expectedResult);
		});
	});
	describe('recursive-calculation', () => {
		test('calculate the factorial of a number when given N = 5', () => {
			const number = 5;
			const expectedResult = 120;
			const result = calculation.calcFactorialByRecursive(number);
			expect(result).toBe(expectedResult);
		});

		test('calculate the factorial of a number when given N = 0', () => {
			const number = 0;
			const expectedResult = 1;
			const result = calculation.calcFactorialByRecursive(number);
			expect(result).toBe(expectedResult);
		});
	});
});
