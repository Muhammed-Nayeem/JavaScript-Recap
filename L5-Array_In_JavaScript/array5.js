//Multidimensional Array:
var studentMarks = [
  [80, 65, 78, 95],
  [70, 85, 75, 68],
  [95, 80, 78, 60],
];

// console.log(studentMarks[0][0]);
// console.log(studentMarks[1][1]);
// console.log(studentMarks[2][2]);

//Traversing:
for (var i = 0; i < studentMarks.length; i++) {
  for (var j = 0; j < studentMarks[i].length; j++) {
    console.log(i +" Elements Value: "+ studentMarks[i][j]);
  }
}
