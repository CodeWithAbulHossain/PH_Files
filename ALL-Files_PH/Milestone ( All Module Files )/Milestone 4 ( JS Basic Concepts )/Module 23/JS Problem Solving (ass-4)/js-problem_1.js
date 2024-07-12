function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Negative numbers are not allowed.";
  }
  const perTicket = 120;
  const securtyGuardExpense = 500;
  const staffLunchExpense = 50;

  const totalExpense = securtyGuardExpense + 8 * staffLunchExpense;

  const totalIncome = ticketSale * perTicket;

  const perDayProfit = totalIncome - totalExpense;

  return perDayProfit;
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
