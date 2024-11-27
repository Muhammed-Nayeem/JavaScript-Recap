//Write a function to convert temperature from Celsius to Fahrenheit.

function toFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

const fahrenheit = toFahrenheit(2);
console.log("Fahrenheit : ", fahrenheit);
