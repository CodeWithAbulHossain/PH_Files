const product = [
  { name: "Shirt", price: 1200, quantity: 2 },
  { name: "Tshirt", price: 900, quantity: 3 },
  { name: "Cap", price: 200, quantity: 1 },
  { name: "Pant", price: 1500, quantity: 6 },
];

function cartTotal(products) {
  let sum = 0;
  for (const product of products) {
    const thisproductCost = product.price * product.quantity;
    sum = sum + thisproductCost;
  }
  return sum;
}

const shoppingCost = cartTotal(product);
console.log(shoppingCost);
