const moblies = [
  { name: "samsung", price: 50000, camera: "48mp", color: "blue" },
  { name: "Sony", price: 70000, camera: "68mp", color: "red" },
  { name: "OppO", price: 30000, camera: "28mp", color: "black" },
  { name: "Nokia", price: 60000, camera: "38mp", color: "gray" },
  { name: "itel", price: 20000, camera: "18mp", color: "gold" },
  { name: "Walton", price: 10000, camera: "8mp", color: "silver" },
];

function getCheaestPhon(phones) {
  let min = phones[0];
  for (const phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}

const cheap = getCheaestPhon(moblies);
console.log(cheap);
