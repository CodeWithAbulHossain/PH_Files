const friends = ["Elon", "bill", "Mark", "Waren"];

for (const friend of friends) {
  //   console.log(friend);
}

for (let i = 0; i < friends.length; i++) {
  //   console.log(i);
  //   console.log(friends[i]);
}

const numbers = [5, 2, 52, 56, 35, 75, 86, 52];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

let i = 0;
while (i < friends.length) {
  console.log(friends[i]);
  i++;
}

let n = 0;

while (n < numbers.length) {
  console.log(numbers[n]);
  n++;
}
