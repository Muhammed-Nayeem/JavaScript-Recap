/**
 * first 100 ----> 100tk
 * 101 to 200 -----> 90tk
 * above 200 ------> 70tk
 */

function getDiscount(quantity) {
  if (quantity <= 100) {
    const total = quantity * 100;
    return total;
  } else if (quantity <= 200) {
    const total = quantity * 90;
    return total;
  } else {
    const total = quantity * 70;
    return total;
  }
}

const totalPrice = getDiscount(205);
console.log("Total price after discount: ", totalPrice);
