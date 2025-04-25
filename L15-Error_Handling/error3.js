//Error Handling with try catch:

function makeWords(str) {
  try {
    let trimStr = str.trim();
    let words = trimStr.split(" ");
    return words;
  } catch (e) {
    // return e.message;
    return "Please provide a valid string!";
  }
}

let result = makeWords("        I am not a good person        ");
console.log(result);
