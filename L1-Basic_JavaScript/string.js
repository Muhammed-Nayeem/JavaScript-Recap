/**
 * Basic String: Anything is wrapped by double quote or single quote or back tick that is called string.
 * String Declaration: i) String Literal, ii) String Constructor;
 **/

//String Literal:
var countryName = "Bangladesh";
var countryCapital = "Dhaka";
console.log("Country is "+ countryName +" & Capital City is "+ countryCapital);

//String Constructor:
var str_1 = String("This is String");
console.log("String : "+ str_1);

//Conversion:
var numOne = 1256;
var numInStr = String(numOne);
console.log(numOne, numInStr);
