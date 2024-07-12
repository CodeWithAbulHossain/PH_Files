const jim = 91;
const kim = 98;
const nim = 84;

if (jim > kim && jim > nim) {
  console.log("jim is the boss");
} else if (kim > jim && kim > nim) {
  console.log("kim is the boss");
} else {
  console.log("nim is the boss");
}

function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

const max1 = maxOfThree(72, 45, 99);
const max2 = maxOfThree(91, 74, 85);
const max3 = maxOfThree(72, 78, 98);
const ultimeatmax = maxOfThree(max1, max2, max3);

console.log(max1, max2, max3, ultimeatmax);

const max22 = Math.max(10, 75, 85, 65, 777);
console.log(max22);
