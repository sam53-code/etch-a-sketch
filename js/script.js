//Creating grid square 16x16

const container = document.querySelector(".gridContainer");

//generate random color

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const bgColor = `rgb(${r}, ${g}, ${b})`;
  //console.log(bgColor);
  return bgColor;
}

// create grid with initial 16*16 squares

function createGrid(size) {
  container.innerHTML = "";

  const gridSize = size * size;
  const squareSizePercentage = 100 / size;

  for (let i = 0; i < gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.height = `${squareSizePercentage}%`;
    square.style.width = `${squareSizePercentage}%`;
    square.style.flex = `0 0 ${squareSizePercentage}%`;

    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = randomColor();
    });

    container.appendChild(square);
  }
}

createGrid(16);

//event listener for bg color change on mouse enter
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = randomColor();
  });
});

//custom grid

const customGrid = document.querySelector("p");
const gridBtn = document.createElement("button");

gridBtn.classList.add("gridSizeBtn");
gridBtn.textContent = "Change Grid Size";

customGrid.after(gridBtn);

gridBtn.addEventListener("click", () => {
  let userInput = parseInt(prompt("Enter number between 1 and 100!"));
  const userGrid = Number(userInput);
  console.log(userGrid);

  if (userInput === null) {
    return;
  }

  if (!Number.isInteger(userGrid) || userGrid < 1 || userGrid > 100) {
    alert("Invalid input! Please enter a valid number between 1 and 100.");
    return;
  }
  createGrid(userGrid);
});
