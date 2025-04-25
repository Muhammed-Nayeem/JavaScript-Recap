import Rectangle from "./Rectangle";
import * as func from "./func";
import {sum, times, div} from "./func";

let rect = new Rectangle(40, 60, "Green");
let result = rect.calculateArea();
console.log(result);

let add = func.sum(20, 10);
console.log(add);

let mul = times(10, 20);
console.log(mul);
