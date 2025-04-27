//How JavaScript Handle Asynchronous Task:
console.log("I am Synchronous Code");

setTimeout(() => {
  console.log("I am Asynchronous Code, I'll be executed after 4 seconds!");
}, 4000);

console.log("I am another Synchronous Code");
