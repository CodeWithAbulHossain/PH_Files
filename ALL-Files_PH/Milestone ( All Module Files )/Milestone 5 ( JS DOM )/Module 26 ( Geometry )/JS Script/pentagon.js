function calculatePentagonArea() {
  const base = getInputValueById("pentagon-lenght");

  const height = getInputValueById("pentagon-width");

  const area = 0.5 * base * height;

  setInnerTextById("penagon-area", area);
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
