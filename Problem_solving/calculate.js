/**
 * chairWood : 5 cft.
 * tableWood : 15 cft.
 * bedWood : 50 cft.
 */

function woodNeed(chairQuantity, tableQuantity, bedQuantity) {
  const chairWood = 5;
  const tableWood = 15;
  const bedWood = 50;

  const chairPrice = chairQuantity * chairWood;
  const tablePrice = tableQuantity * tableWood;
  const bedPrice = bedQuantity * bedWood;

  let totalWoodPrice = chairPrice + tablePrice + bedPrice;
  return totalWoodPrice;
}

const totalPrice = woodNeed(0, 0, 1);
console.log("Total wood price: ", totalPrice);
