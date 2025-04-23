//Destructuring: object, array

let person = {
  name: "Muhammed Nayeem",
  age: 26,
  job: "Job Holder",
  profession: "Engineer",
  contact: {
    email: "m.nayeem97@gmail.com",
    phone: "+8801703479326",
  },
  address: {
    city: "Brahmmanbaria",
    upzilla: "Bijoynagar",
    union: "Budhonti",
    postOffice: "Chandura-3432",
    village: "Kena(Mulla Bari)",
  },
};

let {
  name,
  age,
  job,
  profession,
  contact,
  address,
  contact: { email, phone },
  address: { city, upzilla, union, postOffice, village },
} = person;

console.log(name, age, profession, phone, village);
console.log(name, age, job, profession, email, phone, city, upzilla, union, postOffice, village);

let numbers = [1, 2, 3, 4, 5];
let [first, second, , , fifth] = numbers;
console.log(first, second, fifth);
