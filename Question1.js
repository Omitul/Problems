/*1.Task: Array Filtering and Mapping

Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.*/

const people = [
  {
    name: "Rahim",
    age: 30,
    gender: "Male",
  },
  {
    name: "Karim",
    age: 31,
    gender: "Male",
  },
  {
    name: "Taniya",
    age: 32,
    gender: "female",
  },
  {
    name: "Rehana",
    age: 33,
    gender: "female",
  },
  {
    name: "Aleya",
    age: 34,
    gender: "female",
  },
];

const Func = (ret) => {
  return ret
    .filter((person) => person.gender != "female")
    .map((person) => person.name);
};

const result = Func(people);
console.log(result);
