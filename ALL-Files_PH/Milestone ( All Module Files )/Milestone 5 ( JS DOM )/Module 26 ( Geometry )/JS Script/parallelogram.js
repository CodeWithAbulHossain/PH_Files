function calculateParallelogramArea() {
  const base = getInputValueById("rectangle-base");

  const height = getInputValueById("rectangle-height");

  const area = base * height;

  setInnerTextById("parllelogram-area", area);
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
