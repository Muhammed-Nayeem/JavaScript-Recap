//Private Properties with WeakMap:
const _radius = new WeakMap();
const _name = new WeakMap();
const _size = new WeakMap();
const _resize = new WeakMap();
const _printProperties = Symbol;

class Circle {
  constructor(radius, name, size) {
    _size.set(this, size);
    _radius.set(this, radius);
    _name.set(this, name);
    _resize.set(this, () => {
      console.log(`Radius Size is: ${_size.get(this)}`);
    });
  }

  // getRadius() {
  //   return _radius.get(this);
  // }

  get radius() {
    return _radius.get(this);
  }

  set radius(v) {
    _radius.set(this, v);
  }

  draw() {
    console.log("Drawing radius...");
    this[_printProperties]();
  }

  [_printProperties]() {
    _resize.get(this)();
    console.log(`Radius Width is: ${_radius.get(this)}`);
    console.log(`Radius Name is: ${_name.get(this)}`);
  }
}

let c1 = new Circle(20, "CRED", 10);

c1.radius = 50;
console.log(c1.radius);

c1.draw();
