function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

function subtract(num1, num2) {
  const sub = num1 - num2;
  return sub;
}

function multiply(num1, num2) {
  const mul = num1 * num2;
  return mul;
}

function divide(num1, num2) {
  const divi = num1 / num2;
  return divi;
}

function calculator(a, b, operation) {
  if (operation === "add") {
    const result = add(a, b);
    return result;
  } else if (operation === "subtract") {
    const result = subtract(a, b);
    return result;
  } else if (operation === "multiply") {
    const result = multiply(a, b);
    return result;
  } else if (operation === "divide") {
    const result = divide(a, b);
    return result;
  } else {
    return "only allowed 'add', 'sub', 'mul', 'div'";
  }
}

const result = calculator(35, 7, "subtract");
console.log(result);
