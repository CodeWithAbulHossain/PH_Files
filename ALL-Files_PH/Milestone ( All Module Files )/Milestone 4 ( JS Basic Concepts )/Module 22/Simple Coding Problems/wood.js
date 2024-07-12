function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const pearChairWood = 4;
  const pearTableWood = 7;
  const pearBeadWood = 25;

  const chairTotalWood = pearChairWood * chairQuantity;
  const tableTotalWood = pearTableWood * tableQuantity;
  const beadTotalWood = pearBeadWood * bedQuantity;

  const totalWood = chairTotalWood + tableTotalWood + beadTotalWood;

  return totalWood;
}

const wood = woodQuantity(2, 4, 1);

console.log(wood);

/**
 * shirt
 * pant
 * shoe
 * tai
 * muja
 */
