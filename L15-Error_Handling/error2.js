//Error Handling with if-else:
function convertToInt(n) {
  let intNum = Number.parseInt(n);
  if (!intNum) {
    return "Please provide a valid number which is able to convert into integer number";
  } else {
    return intNum;
  }
}

let result = convertToInt("vdfgfdgdf10.5454gdfgdfgdsf");
console.log(result);
