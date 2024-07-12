function calculateEllipseArea() {
  const base = getInputValueById("ellipse-lenght");

  const height = getInputValueById("ellipse-width");

  const area = base * height;

  setInnerTextById("ellipse-area", area);
}

function getInputValueById(inputeFieldId) {
  const inputField = document.getElementById(inputeFieldId);
  const inputvalueText = inputField.value;
  const inputeValue = parseFloat(inputvalueText);
  return inputeValue;
}

function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
