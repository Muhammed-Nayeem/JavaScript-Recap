/**
 * first 100 ----> 100tk
 * 101 to 200 -----> 90tk
 * above 200 ------> 70tk
 */

function layeredDiscount(quantity) {
  const first100_price = 100;
  const second100_price = 90;
  const above200_price = 70;

  if (quantity <= 100) {
    const total = first100_price * quantity;
    return total;
  } else if (quantity <= 200) {
    const first_100price = first100_price * 100;
    const remainingQuantity = quantity - 100;
    const remainingPrice = second100_price * remainingQuantity;
    const total = remainingPrice + first_100price;
    return total;
  } else {
    const first_100price = first100_price * 100;
    const second_100price = second100_price * 100;
    const remainingQuantity = quantity - 200;
    const remainingPrice = above200_price * remainingQuantity;
    const total = first_100price + second_100price + remainingPrice;
    return total;
  }
}

const totalPrice = layeredDiscount(210);
console.log("Total price after discount: ", totalPrice);
