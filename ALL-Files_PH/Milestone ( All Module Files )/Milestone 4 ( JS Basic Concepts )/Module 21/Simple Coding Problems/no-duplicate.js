const biryanikhor = ["monu", "konu", "canu", "monu", "canu", "volu", "konu"];

const numbers = [1, 5, 8, 9, 7, 1, 8, 9, 7, 45, 75, 45];

function noDuplicate(array) {
  const unique = [];
  for (const item of array) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);
