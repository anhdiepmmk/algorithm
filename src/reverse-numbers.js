const numbers = [1, 2, 3, 4, 5, 6];

function reverseNumbers(numbers) {
  let newNumbers = [];
  for (let index = numbers.length - 1; index >= 0; index--) {
    newNumbers += numbers[index];
  }
  return newNumbers;
}

console.log(reverseNumbers(numbers));
