const result = require('./cubic-equation');

describe('triple equation', () => {
  test.each([
    {
      // a = 0
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      expected: 'The equation has no solution.',
    },

    {
      // delta < 0
      a: 1,
      b: 1,
      c: 2,
      d: 3,
      expected: -1.2756822036509847,
    },

    {
      // delta = 0
      // (b^3 - 27*a^2*d) < 0
      a: 3,
      b: 3,
      c: 1,
      d: 3,
      expected: -1.3208320228024568,
    },

    {
      // delta = 0
      // (b^3 - 27*a^2*d) = 0
      a: 4,
      b: 0,
      c: 0,
      d: 0,
      expected: -0,
    },

    {
      // delta = 0
      // (b^3 - 27*a^2*d) > 0
      a: 1,
      b: 15,
      c: 75,
      d: 7,
      expected: -9.904868131524017,
    },

    {
      // delta > 0
      // Math.abs(k) > 1
      a: 3,
      b: 6,
      c: 2,
      d: 2,
      expected: -1.834686470520026,
    },

    {
      // delta > 0
      // Math.abs(k) <= 1
      a: 2,
      b: 3,
      c: -1,
      d: -1,
      expected: {
        x1: 0.6180339887498949,
        x2: -0.49999999999999994,
        x3: -1.6180339887498947,
      },
    },
  ])(
    'should return $expected when given ($a, $b, $c, $d)',
    ({ a, b, c, d, expected }) => {
      expect(result.cubicEquationSolve(a, b, c, d)).toEqual(expected);
    },
  );
});
