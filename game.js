import { SNAKE_SPEED, updateSnake, drawSnake } from './snake.js';
import { updateFood, drawFood } from './food.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById('board');

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if(secondsSinceLastRender < (1 / SNAKE_SPEED)) {
    return;
  }

  lastRenderTime = currentTime;

  update();
  drawItems();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
}

function drawItems() {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
}
