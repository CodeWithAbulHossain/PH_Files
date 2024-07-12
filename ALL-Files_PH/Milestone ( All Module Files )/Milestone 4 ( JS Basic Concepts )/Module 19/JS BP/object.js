const bottle = {
  brand: "RFL",
  price: 125,
  color: "red",
  isClean: "yes",
};
// non-primitiv

const subject = {
  subname: "bangla",
  teacher: "kalam khan",
  examDate: "12 Jan 2024",
  lession: ["one", "two"],
  exam: {
    name: "final",
    marks: 60,
  },
};

// const persone = {
//   name: "hossain",
//   age: 26,
//   pfofession: "developer",
//   salary: 25000,
//   married: false,
//   "fav places": ["kuykata", "bantarban"],
// };

// console.log(persone.married);
// const income = persone.salary;
// // console.log(income);
// // console.log(persone["age"]);
// const boyos = persone["age"];
// console.log(boyos);
// console.log(persone["fav places"]);

const persone = {
  name: "hossain",
  age: 26,
  pfofession: "developer",
  salary: 25000,
  married: false,
  "fav places": ["kuykata", "bantarban"],
};

persone.salary = 30000;
persone["age"] = 27;
console.log(persone);
