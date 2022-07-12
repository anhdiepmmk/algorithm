function isPrimeNumber(n) {
  let flag = true;
  if (n < 2) {
    flag = false;
  } else {
    for (let i = 2; i < n - 1; i += 1) {
      if (n % i === 0) {
        flag = false;
      }
    }
  }
  return flag;
}

module.exports = {
  isPrimeNumber,
};
