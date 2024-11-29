// Write a function for budget calculate with parameters for user input!

function calculateElectronicsBudget(laptops, tablets, mobiles) {
  const laptop = 35000;
  const tablet = 15000;
  const mobile = 20000;

  let total_price = laptop * laptops + tablet * tablets + mobile * mobiles;
  return total_price;
}

const totalMoneyRequired = calculateElectronicsBudget(5, 3, 6);
console.log("Total money required: ", totalMoneyRequired);
