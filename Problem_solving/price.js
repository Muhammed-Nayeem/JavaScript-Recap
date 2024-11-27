// const phonePrices = [20000, 12000, 45000, 30000, 10000, 80000, 95000, 25000, 65000];

// function getCheapestPrice(priceArr) {
//   let minPrice = priceArr[0];

//   for (let value of priceArr) {
//     if (value < minPrice) {
//       minPrice = value;
//     }
//   }
//   return minPrice;
// }

// let cheapPrice = getCheapestPrice(phonePrices);
// console.log("Cheapest Phone Price is: ", cheapPrice);


const phones = [
  {phoneName: "Samsung S22", RAM: "8gb", ROM: "128gb", price: 70000, frontCam: "15mp", rareCam: "50mp"},
  {phoneName: "Xiaomi Note 13", RAM: "8gb", ROM: "256gb", price: 29000, frontCam: "50mp", rareCam: "100mp"},
  {phoneName: "Sony Xperia Mark III", RAM: "8gb", ROM: "128gb", price: 60000, frontCam: "30mp", rareCam: "48mp"},
  {phoneName: "Vivo Y30", RAM: "6gb", ROM: "128gb", price: 18000, frontCam: "22mp", rareCam: "40mp"},
  {phoneName: "Techno M3", RAM: "6gb", ROM: "128gb", price: 16500, frontCam: "12mp", rareCam: "18mp"},
  {phoneName: "Iphone 16 Pro Max", RAM: "8gb", ROM: "128gb", price: 160000, frontCam: "18mp", rareCam: "60mp"},
];

function getCheapestPhone(phones_arr) {
  let min_price = phones_arr[0];

  for (let phone of phones_arr) {
    if (phone.price < min_price.price) {
      min_price = phone;
    }
  }
  return min_price;
}

let cheapestPhone = getCheapestPhone(phones);
console.log("Cheapest Phone is: ", cheapestPhone);
