var x = 45;

function scope() {
  // var x = 35;
  console.log(x);
  function innerScope() {
    // var y = 25;
    console.log(x);
    // console.log(y);
  }
  // console.log(y);
  innerScope();
}

scope();
