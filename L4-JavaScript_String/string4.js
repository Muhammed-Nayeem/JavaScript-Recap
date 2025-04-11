//Some built in string methods:
var firstName = "Muhammed";
var lastName = "Nayeem";
var fullName = firstName.concat(" ", lastName);
console.log(fullName);
var extract = fullName.substring(9, 15);
console.log(extract);
console.log(extract.charAt(0));
console.log(fullName.startsWith("M"));
console.log(fullName.endsWith("m"));
var slicedName = fullName.slice(9, 15);
console.log(slicedName);
var lowercase = fullName.toLowerCase();
console.log(lowercase);
var uppercase = fullName.toUpperCase();
console.log(uppercase);
var trimStr = "          Nayeem         ";
console.log(trimStr.trim());
console.log(fullName.split(" "));
console.log(fullName.split(""));
