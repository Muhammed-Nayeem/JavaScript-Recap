// Write a function to find the longest word in a given string.
const sentence = "I am learning Programming to become a programmer";

function findLongestString(str) {
  let words = str.split(" ");
  let longest_word = words[0];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest_word.length) {
      longest_word = words[i];
    }
  }
  return longest_word;
}

const longestWord = findLongestString(sentence);
console.log("Longest Word is: ", longestWord);
