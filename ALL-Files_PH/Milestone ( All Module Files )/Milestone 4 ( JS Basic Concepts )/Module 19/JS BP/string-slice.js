const address = "Kalaskati";
const part = address.slice(3, 6);

console.log(part);

const sentence = " I am a student";
console.log(sentence.split(" "));
console.log(sentence.split("a"));

const friendstr = "babul,monir,dalim,molim,jalim";

console.log(friendstr.split(","));

const realFriend = ["monir", "manu", "nadim", "karim"];
console.log(realFriend.join());
console.log(realFriend.join(""));
console.log(realFriend.join("|"));
console.log(realFriend.join("_"));
