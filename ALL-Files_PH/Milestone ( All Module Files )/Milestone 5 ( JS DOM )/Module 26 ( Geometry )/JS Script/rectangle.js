// calculate recangle area

function calculateRectangleArea() {
  const rectangleInput = document.getElementById("rectangle-lenght");
  const lenghtText = rectangleInput.value;
  const lenght = parseFloat(lenghtText);

  const widthInput = document.getElementById("rectangle-width");
  const widthText = widthInput.value;
  const width = parseFloat(widthText);

  const area = lenght * width;

  const reactangleAreaSpan = document.getElementById("rectangle-area");
  reactangleAreaSpan.innerText = area;
}
