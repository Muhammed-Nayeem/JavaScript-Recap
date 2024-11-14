//Operators are the most important things in every programming languages to work with mathematical terms;

//Arithmetic Operators: +, -, *, /, %;
var num_1 = 10;
var num_2 = 20;
var sum = num_1 + num_2;
console.log("Sum : ", sum);

var num_3 = 40;
var num_4 = 30;
var sub = num_3 - num_4;
console.log("Sub : ", sub);

var num_5 = 5;
var num_6 = 6;
var multi = num_5 * num_6;
console.log("Multi : ", multi);

var num_7 = 10;
var num_8 = 2;
var div = num_7 / num_8;
console.log("Div : ", div);

var numOne = 7;
var numTwo = 3;
var mod = numOne % numTwo;
console.log("Mod : ", mod);

//Incremental Operators: i)Pre-Incremental Operator, ii)Post-Incremental Operator;

//Pre-Incremental Operator:
var a = 10;
console.log(++a); //11
console.log(a); //11
console.log(a++); //11
console.log(a); //12
console.log(++a); //13

//Post-Incremental Operator:
var b = 10;
console.log(b++); //10
console.log(b); //11
console.log(b++); //11
console.log(++b); //13
console.log(b); //13

//Decremental Operator: i)Pre-Decremental Operator, ii)Post-Decremental Operator;

//Pre-Decremental Operator:
var c = 10;
console.log(--c); //9
console.log(c); //9
console.log(c--); //9
console.log(c); //8
console.log(c--); //8
console.log(--c); //6
console.log(c) //6

//Post-Decremental Operator:
var d = 10;
console.log(d--); //10
console.log(d); //9
console.log(d--); //9
console.log(--d); //7
console.log(d); //7

//Assignment Operator:
var m = m + 10;
m += 10;

var n = n - 10;
n -= 10;

var o = o * 10;
o *= 10;

var p = p / 10;
p /= 10;

var q = q % 10;
q %= 10;

//Comparison Operators: ==, ===, >, <, >=, <=, !=, !==;
//Logical Operators: &&, ||, !;
//Comma Operator:
var x = 1;
x = (x++, x);
console.log(x); //2

//Ternary Operators:
var z = 5, y = 10;
var result = (z > y) ? z : y;
console.log(result);
