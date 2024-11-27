// Generate a random number between 10 to 20.

function generateRandomNumber(min_num, max_num) {
  return Math.floor(Math.random() * (max_num - min_num + 1)) + min_num;
}

const randomNum = generateRandomNumber(10, 20);
console.log("Random Number: ", randomNum);
