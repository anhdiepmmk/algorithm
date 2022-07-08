const swap2Numbers = require('./swap2numbers');

describe('swap2Numbers', () => {
	test('return two new numbers when given two numbers number1 = 2, number2 = 7', () => {
		const number1 = 2;
		const number2 = 7;
		const expectedResult = { number1: 7, number2: 2 };

		const result = swap2Numbers.swap(number1, number2);
		expect(result).toEqual(expectedResult);
	});
});
