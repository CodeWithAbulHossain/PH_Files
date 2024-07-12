function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }
  let monthlyTotalIncome = 0;
  let totalMonthlyTax = 0;

  for (let payment of arr) {
    monthlyTotalIncome += payment;

    if (payment >= 3000) {
      let tax = payment * 0.2;
      totalMonthlyTax += tax;
    }
  }
  let monthalySaving = monthlyTotalIncome - totalMonthlyTax - livingCost;

  if (monthalySaving >= 0) {
    return "Total Savings";
  } else {
    return "earn more";
  }
}

// console.log(monthlySavings([1000, 2000, 3000], 5400));
// console.log(monthlySavings([1000, 2000, 2500], 5000));
// console.log(monthlySavings([900, 2700, 3400], 10000));
// console.log(monthlySavings(100, [900, 2700, 3400]));
