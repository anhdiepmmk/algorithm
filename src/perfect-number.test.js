const perfect = require('./perfect-number');

describe('perfect number', () => {
  test.each([
    { n: 6, expected: true },
    { n: 28, expected: true },
    { n: 496, expected: true },
    { n: 8128, expected: true },
  ])('should return $expected when given $n', ({ n, expected }) => {
    expect(perfect.isPerfect(n)).toEqual(expected);
  });
  test.each([
    { n: 0, expected: false },
    { n: 12, expected: false },
    { n: 5, expected: false },
    { n: 100, expected: false },
    { n: 128, expected: false },
  ])('should return $expected when given $n', ({ n, expected }) => {
    expect(perfect.isPerfect(n)).toEqual(expected);
  });
});
