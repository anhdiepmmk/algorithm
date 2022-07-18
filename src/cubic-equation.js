function cubicEquationSolve(a, b, c, d) {
  const delta = b ** 2 - 3 * a * c;
  const k =
    (9 * a * b * c - 2 * b ** 3 - 27 * a ** 2 * d) /
    (2 * (Math.abs(delta) ** 3) ** (1.0 / 2));
  const absK = Math.abs(k);
  let x;
  let x1;
  let x2;
  let x3;
  if (a === 0) {
    return 'The equation has no solution.';
  }

  if (delta > 0) {
    if (absK <= 1) {
      x1 = (2 * delta ** (1.0 / 2) * Math.cos(Math.acos(k) / 3) - b) / (3 * a);
      x2 =
        (2 *
          delta ** (1.0 / 2) *
          Math.cos(Math.acos(k) / 3 - (2 * Math.PI) / 3) -
          b) /
        (3 * a);
      x3 =
        (2 *
          delta ** (1.0 / 2) *
          Math.cos(Math.acos(k) / 3 + (2 * Math.PI) / 3) -
          b) /
        (3 * a);
      return { x1, x2, x3 };
    }

    if (absK > 1) {
      x =
        ((delta ** (1.0 / 2) * absK) / (3 * a * k)) *
          ((absK + (k ** 2 - 1) ** (1.0 / 2)) ** (1.0 / 3) +
            (absK - (k ** 2 - 1) ** (1.0 / 2)) ** (1.0 / 3)) -
        b / (3 * a);
      return x;
    }
  }

  if (delta === 0) {
    if (b * b * b - 27 * a * a * d === 0) {
      x = -b / (3 * a);
    }

    if (b ** 3 - 27 * a ** 2 * d < 0) {
      x = (-b - (27 * a ** 2 * d - b ** 3) ** (1 / 3)) / (3 * a);
    }

    if (b ** 3 - 27 * a ** 2 * d > 0) {
      x = (-b - (b ** 3 - 27 * a ** 2 * d) ** (1 / 3)) / (3 * a);
    }
    return x;
  }

  const k1 = (k + Math.sqrt(k * k + 1)) ** (1 / 3);
  const k2 = (Math.sqrt(k * k + 1) - k) ** (1 / 3);
  const p = Math.abs(delta) ** 0.5 / (3 * a);
  x = p * (k1 - k2) - b / (3 * a);
  return x;
}

module.exports = {
  cubicEquationSolve,
};
