function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaing = inch % 12;
  const result = feetNumber + " ft " + inchRemaing + " inch ";
  return result;
}

// const shovoHeight = inchToFeet(68);
// console.log(shovoHeight);
const shovoHeight2 = inchToFeet2(68);
// console.log(shovoHeight2);

function millesToKilometers(mile) {
  const kilomiter = mile * 1.60934;
  return kilomiter;
}

const ktm = millesToKilometers(23);
console.log(ktm);
