function layeredDiscountprice(quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const avove200price = 70;

  if (quantity <= 100) {
    const total = quantity * first100Price;
    return total;
  } else if (quantity <= 200) {
    const first100Total = 100 * first100Price;
    const remaingQuantity = quantity - 100;
    const remaingtotal = remaingQuantity * second100Price;
    const total = first100Total + remaingtotal;
  } else {
    const first100Total = 100 * first100Price;
    const second100total = 100 * second100Price;
    const remaingQuantity = quantity - 200;
    const ermainingTotal = remaingQuantity - avove200price;
    const total = first100Total + second100total + ermainingTotal;
    return total;
  }
}

const total = layeredDiscountprice(202);
console.log(total);
