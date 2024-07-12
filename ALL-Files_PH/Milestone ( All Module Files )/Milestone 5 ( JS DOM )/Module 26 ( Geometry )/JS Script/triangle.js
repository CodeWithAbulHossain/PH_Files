function calculateTriangleArea() {
  // triangle base
  const triangleBaseinput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseinput.value;
  const base = parseFloat(triangleBaseText);

  // triangle height
  const tringleheightTinput = document.getElementById("triangle-height");
  const tringleHeghtText = tringleheightTinput.value;
  const height = parseFloat(tringleHeghtText);

  // calculate triangle area
  const area = 0.5 * base * height;

  // display triangle area
  const trangleSpan = document.getElementById("triangle-area");
  trangleSpan.innerText = area;
}
