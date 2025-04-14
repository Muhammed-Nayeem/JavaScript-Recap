function greet(msg) {
  return function (name) {
    return msg + "! " + name;
  };
}

var gm = greet("Good Morning");
console.log(gm("Nayeem"));
var ge = greet("Good Evening");
console.log(ge("Kashfiya"));
var gn = greet("Good Night");
console.log(gn("Ishrat"));

function base10(n) {
  function power(b) {
    var res = 1;
    for (var i = 1; i <= n; i++) {
      res *= b;
    }
    return res;
  }
  return power;
}

var base = base10(5);
console.log(base(2));
