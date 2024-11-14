/**
 * Variables: Variables is like a container where you can store any kind of value in it.
 * Keywords: Before ES6 in JS, For declare a variable need to use "var" keyword. And this "var" is functional scope, with declare a variable by var keyword you can modified the value of anytime.
 */

var name = "Muhammed Nayeem";
var age = 26;

//value modified:
name = "Nayeem";
//value modified:
age = 24;

console.log("I am " + name);
console.log(name + " is known JavaScript. But his age is just " + age + "!");
console.log("His age is just " + age + "! But " + name + " is JavaScript Programmer!");
console.log(name + " teach JavaScript but he is just " + age + " years old!");

var countryName = "Bangladesh"; //string
var capitalCity = "Dhaka"; //string
console.log("My country is "+ countryName +" .Which capital city is "+ capitalCity);

//Number value:
var numOne = 50;
var numTwo = 50;
var sumOfTwoNum = numOne + numTwo;
console.log(numOne +" + "+ numTwo +" = "+ sumOfTwoNum);

var num_3 = 44.45;
var num_4 = 55.55;
var sumOfNum = num_3 + num_4;
console.log(num_3 +" + "+ num_4 +" = "+ sumOfNum);

//multiple variables declare:
var fullName, age, profession, email, phoneNumber;

fullName = "Muhammed Nayeem";
age = 26;
profession = "Software Developer";
phoneNumber = "01703479336";
email = "mnayeem97@yahoo.com";

console.log("Name : "+ fullName);
console.log("Age : "+ age);
console.log("Profession : "+ profession);
console.log("Phone Number : "+ phoneNumber);
console.log("Email : "+ email);
