// for (let i = 1; i <= 10; i += 1) {
//   console.log("HOSSAIN");
// }

// for (let i = 1; i <= 11; i++) {
//   console.log("hello", i);
// }
// for (let i = 0; i <= 11; i += 2) {
//   console.log("hello", i);
// }
// for (let i = 1; i <= 11; i += 2) {
//   console.log("hello", i);
// }

const nums = [2, 48, 56, 78, 96, 52, 48, 79, 63];

let sumOdd = 0;
let sumEven = 0;

for (let i = 0; i < nums.length; i++) {
  const x = nums[i];

  if (x % 2 === 1) {
    sumOdd += x;
  } else {
    sumEven += x;
  }
}

console.log(sumEven);
console.log(sumOdd);
// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }
