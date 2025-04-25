//Private data with Symbol:
const _width = Symbol();
const _height = Symbol();
const _printProperties = Symbol();

class Rectangle {
  constructor(width, height) {
    this[_width] = width;
    this[_height] = height;
  }

  draw() {
    console.log("Drawing Rectangle...");
    this[_printProperties]();
  }

  [_printProperties]() {
    console.log(`Rectangle width: ${this[_width]}`);
    console.log(`Rectangle height: ${this[_height]}`);
  }
}

let rect = new Rectangle(20, 30);
rect.draw();

// let key = Object.getOwnPropertySymbols(rect)[1];
// console.log(rect[key])
