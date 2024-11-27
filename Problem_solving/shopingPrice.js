const products = [
  { name: "Shampo", price: 300 },
  { name: "Chruni", price: 100 },
  { name: "Shirt", price: 600 },
  { name: "Pant", price: 1250 },
];

function productsPrice(productsArr) {
  let total = 0;

  for (let i = 0; i < productsArr.length; i++) {
    total += productsArr[i].price;
  }
  return total;
}

let totalPrice = productsPrice(products);
console.log("Total price is: ", totalPrice);
