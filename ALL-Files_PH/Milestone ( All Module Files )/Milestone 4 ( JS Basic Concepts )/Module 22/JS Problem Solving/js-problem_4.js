function findAddress(obj) {
  const street = obj.street || "___";
  const house = obj.house || "___";
  const society = obj.society || "___";

  const str = street + "," + house + "," + society;

  return str;
}

console.log(
  findAddress({ street: 10, house: "15A", society: "Earth Perfect" })
);
console.log(findAddress({ street: 10 }));
console.log(findAddress({ street: 10, society: "Earth Perfect" }));
