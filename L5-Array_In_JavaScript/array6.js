//Reversing an Array:
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num);

//using built in method:
// console.log(num.reverse());

//Normal:
for (var i = 0; i < (num.length / 2); i++) {
  var temp = num[i];
  num[i] = num[num.length - 1 - i];
  num[num.length - 1 - i] = temp;
}
console.log(num);
