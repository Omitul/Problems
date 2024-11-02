/*4.Task: Sorting Objects
Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.*/

const cars = [
  { make: "A", model: "Model 1", year: 2020 },
  { make: "B", model: "Model 2", year: 2019 },
  { make: "C", model: "Model 3", year: 2021 },
  { make: "D", model: "Model 4", year: 2018 },
  { make: "E", model: "Model 5", year: 2022 },
];

const sortResult = (arr) => {
  return arr.sort((a, b) => a.year - b.year);
};
console.log(sortResult(cars));
