//Hoisting is a by default behavior of JS and it defines when a value will be assigned to a variable;
var a = 10;
// newPrint(a);

print(100);

var newPrint = print;
newPrint(45);

function print(n) {
  console.log(n);
}

print(a);


//Creation Phase:
//a = undefined
//newPrint = undefined
//print() = {print() keep ref}

//Execution Phase:
//a = 10 -> replace with undefined;
//print(100) = go to the print function reference and work done -> 100;
//newPrint = print() ref;
//newPrint(45) = go to the print function reference and work done -> 45;
//print(a) =  go to the print function reference and work done -> 10;