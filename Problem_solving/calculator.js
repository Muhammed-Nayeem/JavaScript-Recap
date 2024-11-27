function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculate(a, b, operation) {
  switch (operation) {
    case "add":
      if (typeof a !== "number" || typeof b !== "number") {
        return "Provide a valid number!";
      } else {
        let sum = add(a, b);
        return sum;
      }

    case "subtract":
      if (typeof a !== "number" || typeof b !== "number") {
        return "Provide a valid number!";
      } else {
        let sub = subtract(a, b);
        return sub;
      }

    case "multiply":
      if (typeof a !== "number" || typeof b !== "number") {
        return "Provide a valid number!";
      } else {
        let mul = multiply(a, b);
        return mul;
      }

    case "divide":
      if (typeof a !== "number" || typeof b !== "number") {
        return "Provide a valid number!";
      } else {
        let div = divide(a, b);
        return div;
      }

    default:
      console.log(
        "Only 'Add', 'Subtract', 'Multiply', 'Divide' operation's are allowed!"
      );
      break;
  }
}

let sum = calculate(10, 20, "add");
// let sub = calculate(20, 10, "subtract");
// let mul = calculate(5, 6, "multiply");
// let div = calculate(15, 3, "divide");

console.log("Sum is: ", sum);
// console.log("Sub is: ", sub);
// console.log("Mul is: ", mul);
// console.log("Div is: ", div);
