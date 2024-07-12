function calculateRhombusArea() {
  const base = getInputValueById("rhombus-base");

  const height = getInputValueById("rhombus-width");

  const area = 0.5 * base * height;

  setInnerTextById("rhombus-area", area);
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
