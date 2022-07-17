function isPrime(n) {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
}
function printPrime(n) {
  const result = [];
  for (let i = 2; i <= n; i += 1) {
    if (isPrime(i)) result.push(i);
  }
  return result;
}

module.exports = {
  printPrime,
};
