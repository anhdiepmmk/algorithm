function isPerfect(n) {
  let sum = 0;
  for (let i = 1; i <= n / 2; i += 1) {
    if (n % i === 0) sum += i;
  }
  if (sum === n) return true;
  return false;
}

module.exports = {
  isPerfect,
};
