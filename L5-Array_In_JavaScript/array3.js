//Insert, Remove and Replace values:
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num);

// num[3] = 12;
// num.push(12);
// num.unshift(12);
// num.splice(3, 0, 12, 18);

// num.pop();
// num.shift();
num.splice(3, 1, 40, 43);
console.log(num);