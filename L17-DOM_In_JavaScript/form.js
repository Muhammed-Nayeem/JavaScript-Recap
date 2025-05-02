//form event handling:
let form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(this.elements);
  let formData = {};
  let isValid;
  [...this.elements].forEach((el) => {
    if (el.type !== "submit") {
      isValid = validator(el);
      if (isValid) {
        formData[el.name] = el.value;
      } else {
        alert(`${el.name} is required!`);
      }
    }
  });
  if (isValid) {
    console.log(formData);
    this.reset();
  }
});

//basic form validator:
function validator(el) {
  if (!el.value) {
    return false;
  } else {
    return true;
  }
}
