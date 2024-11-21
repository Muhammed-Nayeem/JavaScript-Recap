var i, j;

for (i = 1; i <= 5; i++) {
  var str = "";
  for (j = 1; j <= i; j++) {
    str += " * ";
  }
  console.log(str);
}
for (i = 5; i >= 1; i--) {
  var str = "";
  for (j = i - 1; j >= 1; j--) {
    str += " * ";
  }
  console.log(str);
}
