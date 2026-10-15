//Creating grid square 16x16

const container = document.querySelector(".gridContainer");

for (i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
}

//generate random color

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const bgColor = `rgb(${r}, ${g}, ${b})`;
  //console.log(bgColor);
  return bgColor;
}

//event listener for bg color change on mouse enter
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = randomColor();
  });
});
