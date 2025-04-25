//Custom Error by using Error class:
class CustomError extends Error {
  constructor(msg) {
    super(msg);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }
}

try {
  console.log("This is test 1");
  throw new CustomError("This is Error that occurred!");
  console.log("This is test 2");
} catch {
  console.log("Error is occurred!");
}
