// option --- 1
{
  /* <button onclick="console.log('I am Click')">Click ME 333</button>

<button onclick="document.body.style.backgroundColor='yellow'">
  Make Yellow
</button> */
}

// option --- 2
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option --- 3 (1st)
const makeBlurButton = document.getElementById("make-blue");
// console.log(makeBlurButton);
makeBlurButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option --- 3 (2nd)
const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// option --- 4 (1st)
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}
// option --- 4 (2nd)
const makeGreenButton = document.getElementById("make=green");
makeGreenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// option 4 (3rd) Final

document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });
