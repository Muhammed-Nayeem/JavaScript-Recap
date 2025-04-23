//Default Parameter:
// function double(n=1) {
//   return n * n;
// }
// console.log(double(2));

function greet(msg="Hi", name="Mr.X") {
  console.log(name.length);
  return `${msg}! ${name}`;
}
console.log(greet("Hello", "Muhammed Nayeem"));
