// Write a function to count the number of vowels in a string.

// let randomString = "BanglAdEsh";
let randomString = "MuhAmmEd NayEEm";

function countVowels(str) {
  let string = str.toLowerCase();
  let vowels_count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "i" || string[i] === "o" || string[i] === "u" || string[i] == "e") {
      vowels_count++;
    }
  }
  return vowels_count;
}

const vowelsCount = countVowels(randomString);
console.log("Number Of Vowels: ", vowelsCount);
