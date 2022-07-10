function calcFactorialNonRecursive(n) {
  if (n === 0) {
    return 1;
  }
  let element = 1;
  for (let i = 1; i <= n; i += 1) {
    element *= i;
  }
  return element;
}

function calcFactorialByRecursive(n) {
  let number = n;
  if (number === 0) {
    return 1;
  }
  number *= calcFactorialByRecursive(number - 1);
  return number;
}

module.exports = {
  calcFactorialNonRecursive,
  calcFactorialByRecursive,
};
