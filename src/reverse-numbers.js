function reverseNumbers(numbers) {
  let newNumbers = [];
  for (let index = numbers.length - 1; index >= 0; index -= 1) {
    newNumbers += numbers[index];
  }
  return newNumbers;
}

module.exports = {
  reverseNumbers,
};
