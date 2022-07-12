function findLargestNumber(numbers) {
  if (numbers.length === 0) {
    return -Infinity;
  }
  let max = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (max < numbers[index]) {
      max = numbers[index];
    }
  }
  return max;
}

module.exports = {
  findLargestNumber,
};
