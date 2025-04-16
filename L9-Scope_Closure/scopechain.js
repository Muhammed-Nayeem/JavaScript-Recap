var a = 10;

function A() {
  var b = 20;

  function B() {
    var x = 15;
    console.log(x +" from function B()");
  }

  function C() {
    var y = 25;
    console.log(y +" from function C()");
  }

  D(b);
  B();
  C();
}

function D(n) {
  console.log(n + a);
}

A();

//Scope Chain:
//A() => a, b, B(), C(), D();
//B() => a, b, x, C(), D(), A();
//C() => a, b, y, B(), D(), A();
//D() => a, n, A();
