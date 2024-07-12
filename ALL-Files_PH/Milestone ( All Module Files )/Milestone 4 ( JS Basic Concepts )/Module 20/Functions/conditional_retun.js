function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(isEven(7));
// console.log(isEven(9));
// console.log(isEven(12));

function isOdd(number) {
  if (number % 2 === 1) {
    return true;
  }
  return false;
}

console.log(isOdd(10));
console.log(isOdd(11));
console.log(isOdd(26));
console.log(isOdd(1111));
