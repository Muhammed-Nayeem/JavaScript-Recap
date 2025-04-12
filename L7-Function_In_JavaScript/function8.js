//function scoping:
var a = "abc";

// if (true) {
//   if (true) {
//     var b = 10;
//     console.log(b);
//   }
// }
// console.log(b);

function outer() {
  // var a = 20;
  function inner() {
    // var a = 20;
    console.log(a);
  }
  console.log(a);
  inner();
}
outer();

//example:
function test(n) {
  function a() {
    return n % 3 === 0;
  }

  function b() {
    return n % 5 === 0;
  }

  if (a() && b()) {
    console.log(n +" is divisible by both 3 and 5");
  } else {
    console.log("Not a valid number!");
  }
}

test(15);
