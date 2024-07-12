const school = "KAlaskATI B M AcaDEMY";

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = "bangla";
const book = "Bangla";

// if (subject === book) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }
if (subject.toLowerCase === book.toLowerCase) {
  console.log("Yes");
} else {
  console.log("No");
}

const drink = "water ";
const liquid = "  water";

// if (drink === liquid) {
//   console.log("water is life");
// } else {
//   console.log("liquied");
// }

if (drink.trim() === liquid.trim()) {
  console.log("water is life");
} else {
  console.log("liquied");
}
