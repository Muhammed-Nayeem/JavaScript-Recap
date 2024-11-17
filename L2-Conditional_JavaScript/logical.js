//Logical AND: Number is divisible or not!
var num = 30;

if (num % 5 === 0 && num % 6 === 0 && num % 3 === 0 && num % 2 === 0) {
  console.log(num, " is divisible by 5, 6, 3, 2!");
} else {
  console.log(num, " isn't divisible by those number!");
}

//Logical OR: Vowels or Consonant!
var chr = "a";

if (
  chr === "a" ||
  chr === "e" ||
  chr === "i" ||
  chr === "o" ||
  chr === "u" ||
  chr === "A" ||
  chr === "E" ||
  chr === "I" ||
  chr === "O" ||
  chr === "U"
) {
} else {
  console.log(chr + " is a Consonant!");
}
