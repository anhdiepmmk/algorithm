// const numberArray = [-1, 4, 2, 4, 6, 3, 1, 6, 7, 5, 300, 22, 100];
function findLargestNumber(numberArray) {
  let max = 0;
  for (let index = 0; index < numberArray.length; index++) {
    if (max < numberArray[index]) {
      max = numberArray[index];
    } else {
      max = max;
    }
  }
  return max;
}

module.exports = {
  findLargestNumber,
};
