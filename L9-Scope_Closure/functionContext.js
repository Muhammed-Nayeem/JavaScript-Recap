abc();

function abc() {
  console.log("I am abc() function, I can be called before and after declaration.");
}

abc();


//Creation Phase:
//abc() = {abc()} -> keep the function reference in an object;

//Execution Phase:
//abc() = go to the reference and process the work done;
//abc() = go to the reference and process the work done;
