var a = 10;
var b;

console.log(a); //10
console.log(b); //undefined

b = 20;
console.log(b); //20

console.log(c); //undefined

var c = 30;
console.log(c); //30;

//Creation Phase:
//a = undefined
//b = undefined
//c = undefined

//Execution Phase:
//a = 10 -> replace with undefined;
//console a(10);
//console b(undefined);
//b = 20 -> replace with undefined but before b is consoled;
//console c(undefined);
//c = 30 -> replace with undefined but before b is consoled;
