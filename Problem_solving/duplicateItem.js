let names = ["Abul", "Babul", "Chabul", "kabul", "tabul", "Babul", "Chabul"];

function removeDuplicateItems(namesArr) {
  let uniqueArr = [];
  for (let item of namesArr) {
    if (uniqueArr.includes(item) === false) {
      uniqueArr.push(item);
    }
  }
  return uniqueArr;
}

let result = removeDuplicateItems(names);
console.log(names);
console.log(result);
