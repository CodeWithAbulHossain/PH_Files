function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  }
  let numberArray = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && !isNaN(array[i])) {
      numberArray.push(array[i]);
    }
  }
  return numberArray;
}

// console.log(deleteInvalids([NaN, 1, 12, 0, -1, undefined]));
// console.log(
//   deleteInvalids([
//     1,
//     null,
//     undefined,
//     18,
//     -19,
//     NaN,
//     "12",
//     [1, 2],
//     { ob: "lala" },
//   ])
// );
// console.log(deleteInvalids(["1", { num: 2 }, NaN]));
// console.log(deleteInvalids([1, 2, -3]));
// console.log(deleteInvalids({ num: [1, 2, 3] }));
