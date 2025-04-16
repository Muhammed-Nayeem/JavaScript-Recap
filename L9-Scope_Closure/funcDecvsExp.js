//function declaration vs Expression:
abc();

function abc() {
  console.log("I am abc() function.");
}

abc();
// newAbc();

var newAbc = function() {
  console.log("I am newAbc() function.");
}

newAbc();

//Creation Phase:
//abc() = {abc() keep ref}
//newAbc = undefined

//Execution Phase:
//abc() = go to the reference and work done;
//abc() = go to the reference and work done;
// newAbc() = newAbc anonoymous function ref;
// newAbc() = go to the reference and work done;
