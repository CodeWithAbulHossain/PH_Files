function evenSizedString(str) {
  const size = str.length;
  console.log(str, size);
  if (size % 2 === 0) {
    console.log("even size");
    return true;
  } else {
    console.log("odd size");
    return false;
  }
}

// evenSizedString("Dhaka");
// evenSizedString("faka");

function doubleOrTriple(number, doDouble) {
  if (doDouble === true) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

function numberOfElements(numbers) {
  const len = numbers.length;
  return len;
}

// console.log(numberOfElements([12, 58, 14, 75, 78]));

function getAge(persone) {
  const age = persone.age;
  return age;
}

console.log(getAge(55));
