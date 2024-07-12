function password(obj) {
  const siteNameFirstLetter = obj.siteName.charAt(0).toUpperCase();
  const password = `${siteNameFirstLetter}${obj.siteName.slice(1)}#${
    obj.name
  }@${obj.birthYear}`;
  return password;
}

// console.log(
//   password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
// );
// console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
