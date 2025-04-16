//Execution-Context has two phase: i)Creation Phase & ii)Execution Phase;

function A() {
  B();
  console.log("Function A is calling.");
}

function B() {
  D();
  console.log("Function B is calling.");
}

function C() {
  console.log("Function C is calling.");
}

function D() {
  C();
  console.log("Function D is calling.");
}

var x;
x = 100;
A();
console.log("I am the Global Context");

//Creation Phase:

//Execution Phase: