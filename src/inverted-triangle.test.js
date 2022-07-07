const triangle = require('./inverted-triangle');

describe('inverted-triangle', () => {
	describe('draw', ()=>{
		test('should draw in inverted triangle when given height = 5', ()=> {
			const height = 5;
			const expectedResult = `*****\n *** \n  *  `;
			const result = triangle.drawInvertedTriangle(height);
			expect(result).toBe(expectedResult);
		});

		test('should draw in inverted triangle when given height = 0', ()=> {
			const height = 0;
			const expectedResult = ``;
			const result = triangle.drawInvertedTriangle(height);
			expect(result).toBe(expectedResult);
		});

		test('should draw in inverted triangle when given height = -1', ()=> {
			const height = -1;
			const expectedResult = ``;
			const result = triangle.drawInvertedTriangle(height);
			expect(result).toBe(expectedResult);
		});
	});
});