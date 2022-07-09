function displayFibonacci(number) {
  if (number < 0) {
    return;
  } else if (number === 0) {
    return 0;
  } else if (number === 1) {
    return 1;
  } else if (number >= 2) {
    let fn;
    let f0 = 0;
    let f1 = 1;
    for (let i = 2; i <= number; i++) {
      fn = f0 + f1;
      fo = f1;
      f1 = fn;
    }
    return fn;
  }
}

console.log(displayFibonacci(85));
