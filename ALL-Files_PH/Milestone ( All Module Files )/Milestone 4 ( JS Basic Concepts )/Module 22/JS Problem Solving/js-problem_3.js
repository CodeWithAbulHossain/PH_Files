function sortMaker(arr) {
  const [a, b] = arr;
  if (a < 0 || b < 0) {
    return "INVALID iNPUT";
  }

  if (a == b) {
    return "equal";
  }

  if (a > b) {
    return [a, b];
  } else {
    return [b, a];
  }
}

console.log(sortMaker([2, 3]));
console.log(sortMaker([4, 2]));
console.log(sortMaker([4, 4]));
console.log(sortMaker([1, 2]));
console.log(sortMaker([4, -2]));
