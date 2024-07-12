function evenNumbersOnly(numbers) {
  const evens = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
    }
  }
  return evens;
}

const numbers = [3, 4, 7, 8, 10, 14, 7, 25, 78];
// const evens = evenNumbersOnly(numbers);
// console.log(evens);
function getMenu() {
  console.log("Burger, Pizza, Pasta");
}
