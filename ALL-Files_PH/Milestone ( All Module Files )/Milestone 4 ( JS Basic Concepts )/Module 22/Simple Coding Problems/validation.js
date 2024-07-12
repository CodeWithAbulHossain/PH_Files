function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "please provide anumber";
  }
  const mult = num1 * num2;
  return mult;
}

const result = multiply(8, "seven");
console.log(result);
