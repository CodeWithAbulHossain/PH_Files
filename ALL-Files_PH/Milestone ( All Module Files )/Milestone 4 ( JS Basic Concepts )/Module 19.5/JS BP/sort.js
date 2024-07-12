const persons = ["cabul", "uzzal", "mumun", "habib", "abul", "babul"];

const sortdPersons = persons.sort();
console.log(sortdPersons);

const numbers = [99, 45, 74, 25, 1, 2, 75, 47, 11, 98, 78, 32];
const sortdNumbers = numbers.sort(function (a, b) {
  return a - b;
});
// const sortdNumbers = numbers.sort(function (a, b) {
//   return b - a;
// });
console.log(sortdNumbers);
