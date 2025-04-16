//Execution-Context: It means in a program there is much much lines of code works and keep the information about this code and all the functionalities throughout the execution is called execution context;

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


// Execution Context for function C -> work done first and erase from stack
//Execution Context for function D -> work done and erase from stack
//Execution Context for function B -> work done and erase from stack
//Execution Context for function A -> work done and erase from stack

//I am the Global Execution Context; -> execute and work done global context;
