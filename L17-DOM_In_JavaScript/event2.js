//Name Field Event Handler:
let nameField = document.getElementById("name");

nameField.addEventListener("keypress", function (e) {
  let showName = document.getElementById("show-name");
  if (e.key === "Enter") {
    showName.innerHTML = `Your name is ${e.target.value}`;
    e.target.value = "";
  }
});

//Checkbox: Skills Event Handler
let skills = document.getElementsByName("skills");
let selectedSkills = [];
let showSkills = document.getElementById("show-skills");

skills.forEach((skill) => {
  skill.addEventListener("change", (event) => {
    if (event.target.checked) {
      selectedSkills.push(event.target.value);
      appendSkills(showSkills, selectedSkills);
    } else {
      let indexNum = selectedSkills.indexOf(event.target.value);
      selectedSkills.splice(indexNum, 1);
      appendSkills(showSkills, selectedSkills);
    }
  });
});

function appendSkills(showSkill, skills) {
  let skillSet = "";
  skills.forEach((skill, index) => {
    skillSet += `(${index + 1}) ${skill}. `;
  });
  showSkill.innerHTML = skillSet;
}

//Working with List and Input field:
let list = document.getElementById("list");

list.addEventListener("dblclick", function (event) {
  if (this.contains(event.target)) {
    let text = event.target.innerText;
    event.target.innerText = "";
    let inputBox = createInputField(text);
    event.target.appendChild(inputBox);

    inputBox.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        event.target.innerHTML = e.target.value;
      }
    })
  }
});

function createInputField(value) {
  let inp = document.createElement("input");
  inp.type = "text";
  inp.value = value;
  return inp;
}
