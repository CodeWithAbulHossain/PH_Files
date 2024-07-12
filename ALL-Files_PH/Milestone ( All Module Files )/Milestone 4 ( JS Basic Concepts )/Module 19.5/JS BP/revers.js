const numbers = [1, 5, 2, 8, 99, 63, 74, 85, 62, 35, 84, 45];

// console.log(numbers);

const reversed = numbers.reverse();

// console.log(reversed);

const rev_numbers = [];

for (const num of numbers) {
  //   console.log(num);
  //   rev_numbers.unshift(num);
}
// console.log(rev_numbers);

const reversed_number = [];
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  reversed_number.unshift(num);
}
const rev_rev_numbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  const num = numbers[i];
  console.log(num);
}
console.log(rev_rev_numbers);
