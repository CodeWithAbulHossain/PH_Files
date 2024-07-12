const numbers = [89, 45, 75, 63, 85];

const student = {
  name: "alif khan",
  age: 23,
  id: ["ali2024", "khan2024"],
};

// 1. template string
const about = `my name is ${student.name} age of ${student.age} has number ${numbers[3]} and id ${student.id[1]}`;
console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = (num) => num + 65;
const isEven = (x) => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

// spread operator
const newNumber = [...numbers];

// create a new array from an older array and add an element
const currentnumber = [...newNumber, 55];

numbers.push(56);
numbers.push(86);
numbers.push(96);

console.log(newNumber);
console.log(newNumber);
console.log(currentnumber);
