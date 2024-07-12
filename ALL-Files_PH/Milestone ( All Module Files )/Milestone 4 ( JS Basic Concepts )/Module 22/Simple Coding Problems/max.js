const disha = 59;
const dihan = 71;

if (disha > dihan) {
  console.log("Disha will get the max Number");
} else {
  console.log("Dihan will get the max Number");
}

function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const max1 = getMax(78, 82);
const max2 = getMax(91, 74);
const ultimateMax = getMax(max1, max2);

console.log(max1, max2, ultimateMax);
