const products = [
  { name: "Shampo", price: 300, quantity: 3 },
  { name: "Chruni", price: 100, quantity: 2 },
  { name: "Shirt", price: 600, quantity: 4 },
  { name: "Pant", price: 1250, quantity: 5 },
];

function cartItemPrice(productsArr) {
  let total = 0;

  for (let product of productsArr) {
    const productPrice = product.price * product.quantity;
    total += productPrice;
  }
  return total;
}

let totalPrice = cartItemPrice(products);
console.log("Total price is: ", totalPrice);
