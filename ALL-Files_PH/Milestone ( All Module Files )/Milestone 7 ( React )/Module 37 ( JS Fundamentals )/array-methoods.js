const products = [
  { name: "laptop", price: 56000, brand: "hp", color: "silver" },
  { name: "phone", price: 11000, brand: "itel", color: "gray" },
  { name: "camera", price: 22000, brand: "canon", color: "black" },
  { name: "watch", price: 6000, brand: "casio", color: "golden" },
  { name: "sungalss", price: 1200, brand: "as", color: "orange" },
];
//1. map
const brands = products.map((product) => product.brand);
// console.log(brands);

const prices = products.map((product) => product.price);
// console.log(prices);

// products.forEach((product) => console.log(product));
// products.forEach((product) => console.log(product.brand));
// products.forEach((product) => console.log(product.color));
// 2. forEach
products.forEach((product) => {});

// filter
const cheap = products.filter((product) => product.price <= 11000);
// console.log(cheap);

// const specificName = products.filter((product) => product.name.includes("c"));
const specificName = products.filter((product) => product.name.includes("s"));
// console.log(specificName);

// find
const special = products.find((product) => product.name.includes("c"));
console.log(special);
