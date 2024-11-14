/**
 * Basic Number In Js;
 * Number is declared by tow way : i) Number Literal, ii) Number Constructor
 * Built In Number Methods
 */

//Number Literal: Integer
var numOne = 25;
var numTwo = 35;
var sumOfTwoNum = numOne + numTwo;
console.log("Sum Of "+ numOne +" + "+ numTwo +" = ", sumOfTwoNum);

//Number Literal: float
var num_3 = 44.45;
var num_4 = 55.55;
var sumOfNum = num_3 + num_4;
console.log("Sum Of "+ num_3 +" + "+ num_4 +" = ", sumOfNum);

//Number Constructor: Integer & Float
var num_5 = Number(65);
var num_6 = Number(75.50);
var sumOfNum_2 = num_5 + num_6;
console.log("Sum Of "+ num_5 +" + "+ num_6 +" = ", sumOfNum_2);

//NAN:
console.log("abc" * 5); //Not A Number

//Numbers Built In Method:
var numInStr = "12345";
var num_7 = Number(numInStr);
console.log("Converted Into Number :", num_7);

var sumOfNum_2Int = Number.parseInt(sumOfNum_2);
console.log("Sum Of "+ num_5 +" + "+ num_6 +" = ", sumOfNum_2Int);

var sumOfTwoNum_float = Number.parseFloat(sumOfTwoNum);
console.log("Sum Of "+ numOne +" + "+ numTwo +" = ", sumOfTwoNum_float);

console.log("Number Max Value : ", Number.MAX_VALUE);
console.log("Number Min Value : ", Number.MIN_VALUE);
console.log("Number Max Safe Integer Value : ", Number.MAX_SAFE_INTEGER);
console.log("Number Min Safe Integer Value : ", Number.MIN_SAFE_INTEGER);

//Hexa-decimal Number:
var hexa_decimal = 0xff;
console.log(hexa_decimal);

//Octal Number:
var octal_num = 0o756;
console.log(octal_num);
