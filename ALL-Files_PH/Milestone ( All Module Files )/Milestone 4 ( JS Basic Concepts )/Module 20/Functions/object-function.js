// const subtect = {
//     name: "javscript",
//     subjectPage: 132,
//     writter: "AB",
//   };

//dot notation
// console.log(subtect.name);

// //bracket notation
// console.log(subtect["subjectPage"]);
// //new propaty add
// subtect.price = "457";

// //ex propaty value change
// subtect["name"] = "java";

// //delete propety
// delete subtect.writter;

// console.log(subtect);

const subtect = {
  name: "javscript",
  subjectPage: 132,
  writter: "AB",
};

function subjectDetails(obj) {
  return `subject name is ${obj?.name}, subject page is ${obj?.subjectPage}`;
}

console.log(subjectDetails(subtect));
