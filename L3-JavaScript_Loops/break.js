// var i = 1;

// while (i <= 10) {
//   if (i > 6) {
//     break;
//   } else {
//     console.log(i);
//     i++;
//   }
// }

//Break Statement:
while (true) {
  var random = Math.floor(Math.random() * 10 + 1);
  if (random === 9) {
    console.log("Winner Winner Chicken Dinner!");
    break;
  } else {
    console.log("You're lost!");
  }
}
