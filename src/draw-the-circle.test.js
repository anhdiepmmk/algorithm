const circle = require('./draw-the-circle');

describe('Circle', () => {
  test('should draw the circle when given a radius = 5', () => {
    const radius = 5;
    const expectedResult =
      '.....-.....\n..-*****-..\n.-*******-.\n.*********.\n.*********.\n-*********-\n.*********.\n.*********.\n.-*******-.\n..-*****-..\n.....-.....';
    const result = circle.drawCircle(radius);
    expect(result).toEqual(expectedResult);
  });
  test('should draw the circle when given a radius = 3', () => {
    const radius = 3;
    const expectedResult =
      '...-...\n.*****.\n.*****.\n-*****-\n.*****.\n.*****.\n...-...';
    const result = circle.drawCircle(radius);
    expect(result).toEqual(expectedResult);
  });
  test('should draw the circle when given a radius = 1', () => {
    const radius = 1;
    const expectedResult = '.-.\n-*-\n.-.';
    const result = circle.drawCircle(radius);
    expect(result).toEqual(expectedResult);
  });
  test('should draw the circle when given a radius = 0', () => {
    const radius = 0;
    const expectedResult = '-';
    const result = circle.drawCircle(radius);
    expect(result).toEqual(expectedResult);
  });
});
