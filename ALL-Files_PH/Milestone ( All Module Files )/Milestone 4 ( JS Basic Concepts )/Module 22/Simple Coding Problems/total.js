const product = [
  { name: "Shirt", price: 1200 },
  { name: "Tshirt", price: 900 },
  { name: "Cap", price: 200 },
  { name: "Pant", price: 1500 },
];

function getShoppingTotal(products) {
  let sum = 0;
  for (const product of products) {
    sum = sum + product.price;
  }
  return sum;
}

const total = getShoppingTotal(product);
console.log(total);
