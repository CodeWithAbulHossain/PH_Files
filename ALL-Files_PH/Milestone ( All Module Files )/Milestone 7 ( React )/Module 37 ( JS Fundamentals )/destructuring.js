// array destructuring

const numbers = [45, 56];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [45, 56];

const [x, y] = numbers;

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}
console.log(boxify(45, 85));
