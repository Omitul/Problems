/*09. Task: Find Maximum Value:
Write a function that takes an array of numbers and returns the maximum value.*/

const FindMax = (arr) => {
  return Math.max(...arr);
};

const numbers = [1, 2, 3, 4, 5];

console.log(FindMax(numbers));
