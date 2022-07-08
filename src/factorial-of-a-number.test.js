const calculation = require('./factorial-of-a-number');

describe('factorial-of-a-number', () => {
	test('calculate the factorial of a number when given N = 5', () => {
		const number = 5;
		const expectedResult = 120;
		const result = calculation.calFactorial(number);
		expect(result).toBe(expectedResult);
	});

	test('calculate the factorial of a number when given N = 0', () => {
		const number = 0;
		const expectedResult = 1;
		const result = calculation.calFactorial(number);
		expect(result).toBe(expectedResult);
	});

	test('calculate the factorial of a number when given N = -10', () => {
		const number = -10;
		const expectedResult = 1;
		const result = calculation.calFactorial(number);
		expect(result).toBe(expectedResult);
	});
});
