//How to store any asynchronous task result in a variable:
function storeResult(msg, name) {
  let greet;
  setTimeout(() => {
    greet = `${msg}! ${name}`;
    console.log(greet);
  }, 3000);
  // return greet;
}

let result = storeResult("Hello", "Nayeem");
// console.log(result);
