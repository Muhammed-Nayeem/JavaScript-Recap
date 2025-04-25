//trowing error:

try {
  console.log("I am Line No 1");
  console.log("I am Line No 2");
  throw new Error("I am your error!");
  console.log("I am Line No 3");
  console.log("I am Line No 4");
} catch (e) {
  // console.log(e);
  // console.log(e.message);
  console.log("Error is occured!");
}
