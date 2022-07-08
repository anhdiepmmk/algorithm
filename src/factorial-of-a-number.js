// Not recursive
function calFactorial(n) {
  if (n === 0) {
    return 1;
  } else {
    let element = 1;
    for (let i = 1; i <= n; i++) {
      element *= i;
    }
    return element;
  }
}

module.exports = {
  calFactorial,
};

// console.log(calFactorial(0));

// Recursive
/* function calFactorial(n) {
    if(n == 0) { 
        return 1;
    } else {
    n *= calFactorial(n - 1);
    }
    return n;
}

console.log(calFactorial(5)); */
