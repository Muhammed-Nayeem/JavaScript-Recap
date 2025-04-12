//Array Literal:
var arr = [1, 2, 3, 4, 5];
arr[5] = 6;
arr[6] = 7;
console.log(arr);
arr[2] = 22;
console.log(arr);
arr[10] = 25;
console.log(arr);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

var arr2 = [];
arr2[0] = 10;
arr2[1] = 20;
arr2[2] = 30;
console.log(arr2.length);

//Array Constructor:
var arr3 = Array(5);
var arr4 = Array(40, 50, 60, 70, 80);
arr3[0] = 1;
arr3[1] = 2;
arr3[2] = 3;
arr3[3] = 4;
arr3[4] = 5;
console.log(arr3);
console.log(arr4);
