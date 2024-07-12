const numbers = [45, 85, 96, 74, 1258, 56, 36];

// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   console.log(number);
// }

for (const number of numbers) {
  //   console.log(number);
}

const products = [
  { id: 1, name: phone, price: 22000, brand: nokia },
  { id: 2, name: Tv, price: 28000, brand: media },
  { id: 3, name: PC, price: 45000, brand: Hp },
  { id: 4, name: mobile, price: 12000, brand: soney },
  { id: 5, name: food, price: 200, brand: pran },
  { id: 6, name: bead, price: 20000, brand: pertex },
  { id: 7, name: table, price: 2000 },
  { id: 8, name: cheair, price: 10000 },
  { id: 9, name: water, price: 100, brand: frees },
  { id: 10, name: hony, price: 900 },
  { id: 11, name: show, price: 2200, brand: apex },
];

function matchProducts(products, search) {
  const matched = [];

  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
}

const result = matchProducts(products, "phone");
console.log(result);
