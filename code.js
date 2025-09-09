// Hunter Clarke, 9/8/25
// Snake Game for Quark's Casino

// Set up the game grid (10x10 for simplicity)
const gridSize = 10;

// Snake starts in the middle
let snake = [{ x: 5, y: 5 }];
let food = generateFood();
let score = 0;

/**
 * Generates random food coordinates inside the grid.
 * Ensures the food does not spawn on the snake.
 */
function generateFood() {
  let newFood;
  let onSnake = true;

  while (onSnake) {
    newFood = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };
    onSnake = snake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
  }
  return newFood;
}

/**
 * Renders the grid with snake and food.
 * Uses innerHTML to update the #gameBoard div.
 */
function drawBoard() {
  let boardHTML = "";
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      let cellClass = "cell";

      // Snake body
      if (snake.some(segment => segment.x === x && segment.y === y)) {
        cellClass = "snake";
      }

      // Food
      if (food.x === x && food.y === y) {
        cellClass = "food";
      }

      boardHTML += `<div class="${cellClass}"></div>`;
    }
  }
  document.getElementById("gameBoard").innerHTML = boardHTML;
  document.getElementById("scoreDisplay").innerHTML = `Score: ${score}`;
}

/**
 * Moves the snake in the chosen direction.
 * If it eats food, increase length and score.
 * If it hits wall or itself, reset game.
 */
function moveSnake(direction) {
  // Copy head
  let head = { ...snake[0] };

  // Change direction based on button pressed
  if (direction === "up") head.y--;
  else if (direction === "down") head.y++;
  else if (direction === "left") head.x--;
  else if (direction === "right") head.x++;

  // Check wall collision
  if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
    resetGame("You hit the wall!");
    return;
  }

  // Check self collision
  if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
    resetGame("You ate yourself!");
    return;
  }

  // Add new head
  snake.unshift(head);

  // Check food collision
  if (head.x === food.x && head.y === food.y) {
    score++;
    food = generateFood();
  } else {
    snake.pop(); // Remove tail if no food eaten
  }

  // Redraw board
  drawBoard();
}

/**
 * Resets the game when the snake dies.
 */
function resetGame(message) {
  document.getElementById("heading").innerHTML = message + " Game Over. Restarting...";
  snake = [{ x: 5, y: 5 }];
  score = 0;
  food = generateFood();
  drawBoard();
}

// Draw first board
drawBoard();
