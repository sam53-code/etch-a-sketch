# Etch-a-Sketch

A simple interactive Etch-a-Sketch game built with **HTML, CSS, and JavaScript**. The game features a 16 × 16 grid squares that change to random colors when the mouse hovers over them.

Features

- _16 × 16 Grid:_ Displays 16 interactive squares.
- _Random Colors:_ Each square changes to a randomly generated RGB color when the mouse enters it.
- _Clear Grid:_ Reset the drawing area to its original state with a single click.
- _Smooth Transitions:_ CSS transitions provide a smooth color-changing effect.

Technologies Used

- **HTML5** — Structures the game interface.
- **CSS3** — Styles the grid, squares, and buttons using CSS Grid and Flexbox.
- **JavaScript (ES6+)** — Creates the squares, handles mouse events, and generates random colors.

Project Structure

```text
etch-a-sketch/
├── index.html
├── style.css
├── script.js
└── README.md
```

Getting Started

Prerequisites

You only need a modern web browser and a code editor such as Visual Studio Code.

Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd etch-a-sketch
   ```

3. Open the project in Visual Studio Code:

   ```bash
   code .
   ```

4. Open `index.html` in your browser. Alternatively, use the Live Server extension in VS Code.

How to Play

1. Open the game in your browser.
2. Move your mouse over any square in the grid.
3. Watch the square change to a random color.
4. Hover over other squares to continue drawing.
5. Click _Clear Grid_ to reset all squares to white.

How It Works

1.  Creating the Grid

JavaScript uses a `for` loop to create 16 `<div>` elements dynamically. Each element receives the `square` CSS class and is appended to the grid container.

2.  Changing Colors

Each square has a `mouseenter` event listener. When the mouse enters a square, the `getRandomColor()` function generates a random RGB color and applies it to that square's background.

3.  Generating Random Colors

The `getRandomColor()` function generates random values between 0 and 255 for the red, green, and blue color channels.

4.  Clearing the Grid

The Clear Grid button calls the `createGrid()` function again. This removes the existing squares and creates 16 new white squares.

Learning Objectives

This project provides practical experience with:

- DOM selection using `document.querySelector()`.
- Creating HTML elements with `document.createElement()`.
- Adding and removing DOM content.
- Using `for` loops to generate multiple elements.
- Handling events with `addEventListener()`.
- Manipulating CSS styles using JavaScript.
- Writing reusable functions.
- Generating random numbers with `Math.random()` and `Math.floor()`.

Future Improvements

Potential enhancements include:

- [ ] Allow users to select the grid size.
- [ ] Add a black-and-white drawing mode.
- [ ] Implement an eraser tool.
- [ ] Add a color picker for custom drawing colors.
- [ ] Support click-and-drag drawing.
- [ ] Add a rainbow mode.
- [ ] Add a button to generate a new grid.
- [ ] Improve accessibility and keyboard support.

Contributing

Suggestions and improvements are welcome. Fork the repository, create a feature branch, and submit a pull request.

License

This project is available for educational and personal use. Add a specific open-source license, such as the MIT License, if you intend to distribute it under those terms.

_Built as a JavaScript practice project._
