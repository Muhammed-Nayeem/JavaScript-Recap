var price = 1200;
var isLeader = true;

// if (!isLeader) {
//   price = 0;
// } else {
//   price = price + 100;
// }
// console.log(price);


//Ex: nested
if (!isLeader) {
  if (price >= 1000) {
    price /= 2;
  } else {
    price = 0;
  }
} else {
  price += 1000;
}

console.log(price);
