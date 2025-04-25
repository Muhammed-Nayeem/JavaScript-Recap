//finally block:
try {
  console.log("I am Line No 1");
  console.log("I am Line No 2");
  // throw new Error("I am your error!");
  console.log("I am Line 3");
} catch (e) {
  console.log(e.message);
} finally {
  console.log("I will be work for both.");
}

//Optional catch binding:
try {
  console.log("This is Test 1");
  console.log("This is Test 2");
  throw new Error("This is your Error!");
  console.log("This is Test 3");
} catch {
  console.log("This is the error that occured!");
} finally {
  console.log("I will be work for both.");
}
