const circle = require('./draw-the-circle');

describe('Circle', () => {
  test('should draw the circle when given a radius = 5', () => {
    const radius = 5;
    const expected = '.....-.....\n'
      .concat('..-*****-..\n')
      .concat('.-*******-.\n')
      .concat('.*********.\n')
      .concat('.*********.\n')
      .concat('-*********-\n')
      .concat('.*********.\n')
      .concat('.*********.\n')
      .concat('.-*******-.\n')
      .concat('..-*****-..\n')
      .concat('.....-.....');
    const result = circle.drawCircle(radius);
    expect(result).toEqual(expected);
  });

  test('should draw the circle when given a radius = 3', () => {
    const radius = 3;
    const expected = '...-...\n'
      .concat('.*****.\n')
      .concat('.*****.\n')
      .concat('-*****-\n')
      .concat('.*****.\n')
      .concat('.*****.\n')
      .concat('...-...');
    const result = circle.drawCircle(radius);
    expect(result).toEqual(expected);
  });

  test('should draw the circle when given a radius = 1', () => {
    const radius = 1;
    const expected = '.-.\n'.concat('-*-\n').concat('.-.');
    const result = circle.drawCircle(radius);
    expect(result).toEqual(expected);
  });

  test('should draw the circle when given a radius = 0', () => {
    const radius = 0;
    const expected = '-';
    const result = circle.drawCircle(radius);
    expect(result).toEqual(expected);
  });
});
