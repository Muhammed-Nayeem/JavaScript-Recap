//RangeError:
let n = 110;

if (!(n >= -100 && n <= 100)) {
  throw new RangeError("The value must be between -100 to 100!");
} else {
  console.log(n);
}
