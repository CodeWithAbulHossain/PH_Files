const prices = [20000, 15000, 22000, 50000, 60000, 27000, 111000, 78000, 19000];

function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

const cheap = getMin(prices);
console.log(cheap);
