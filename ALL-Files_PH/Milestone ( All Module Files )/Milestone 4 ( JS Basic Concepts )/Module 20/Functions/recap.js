function add(price1, price2) {
  const total = price1 + price2;
  return total;
}

const bill = add(15, 120);
console.log(bill);

function add1(price1, price2) {
  return price1 + price2;
}

const bill1 = add1(25, 150);
console.log(bill1);

function doMath(num1, num2) {
  const sum = num1 + num2;
  const diff = num1 - num2;
  const multiply = sum * diff;
  const result = multiply / 3;
  return result;
}

const result = doMath(9, 6);
console.log(result);
