//Math is library method in JavaScript:
var exponential_value = Math.E;
console.log("Exponential Value : ", exponential_value);

var pi_value = Math.PI;
console.log("PI Value : ", pi_value);

//Absolute value:
var num = -45, num_2 = 65.50;
var absolute_value = Math.abs(num);
var absolute_value2 = Math.abs(num_2);
console.log(absolute_value, absolute_value2);

//Minimum Integer value:
var num_3 = 10.98;
var min_int = Math.floor(num_3);
console.log(min_int);

//Maximum Integer value:
var num_4 = 10.45;
var max_int = Math.ceil(num_4);
console.log(max_int);

//Round value when up to .5 and less .5 value it would down:
var num_5 = 12.50, num_6 = 12.45;
var round_num = Math.round(num_5);
var nonRound_num = Math.round(num_6);
console.log(round_num, nonRound_num);

//Find maximum value:
console.log(Math.max(35, 55, 25));

//Find minimum value:
console.log(Math.min(55, 25, 35));

//Random value generate:
var random_value = Math.floor(Math.random() * 10 + 1);
console.log("Random Value: ", random_value);
