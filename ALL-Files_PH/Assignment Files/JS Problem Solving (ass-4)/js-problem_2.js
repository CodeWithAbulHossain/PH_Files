function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  let nameLastletter = name[name.length - 1].toLowerCase();
  if (
    nameLastletter === "a" ||
    nameLastletter === "y" ||
    nameLastletter === "i" ||
    nameLastletter === "e" ||
    nameLastletter === "o" ||
    nameLastletter === "u" ||
    nameLastletter === "w"
  ) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

// console.log(checkName("Salman"));
// console.log(checkName("RAFEE"));
// console.log(checkName("Jhankar"));
// console.log(checkName(199));
// console.log(checkName(["Rashed"]));
