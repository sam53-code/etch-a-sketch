//Creating grid square 16x16

const container = document.querySelector(".gridContainer");

for (i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("gridSquare");
  container.appendChild(square);
}
