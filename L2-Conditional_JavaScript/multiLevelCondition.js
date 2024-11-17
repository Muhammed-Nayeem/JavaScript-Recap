//Example: 01
// var price = 4000;

// if (price >= 5000) {
//   var discount = (price * 10) / 100;
//   var payment = price - discount;
//   console.log(payment);
// } else if (price >= 2500) {
//   var discount = (price * 5) / 100;
//   var payment = price - discount;
//   console.log(payment);
// } else {
//   console.log(price);
// }

//Example: 02
// var price = 1000;
// var age = 75;

// if (age <= 18) {
//   console.log("You can eat free!");
// } else if (age <= 30) {
//   var discount = (price * 5) / 100;
//   var payment = price - discount;
//   console.log(payment);
// } else if (age <= 60) {
//   var discount = (price * 15) / 100;
//   var payment = price - discount;
//   console.log(payment);
// } else if (age <= 80) {
//   var discount = (price * 30) / 100;
//   var payment = price - discount;
//   console.log(payment);
// } else {
//   console.log(price);
// }

//ExamPle: 03
var money = -50;
if (money > 300) {
  console.log("You're rich men!");
} else {
  if (money > 100) {
    console.log("Neither you're rich or Neither you're poor!");
  } else {
    if (money > 0) {
      console.log("Bro eat some banana's and increase your calcium!");
    } else {
      console.log("Sorry! Don't want money loan to me!");
    }
  }
}
