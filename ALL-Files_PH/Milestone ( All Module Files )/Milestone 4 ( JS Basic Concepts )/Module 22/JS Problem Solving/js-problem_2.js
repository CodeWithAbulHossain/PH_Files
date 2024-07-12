function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "please input is string";
  }
  const result = string1.includes(string2);
  return result;
}

console.log(matchFinder("John Doe", "ohn"));
console.log(matchFinder("Abul Hossain", "Abul hossain"));
console.log(matchFinder("Howlader", "howlader"));
console.log(matchFinder("Kalaskati", 5));
