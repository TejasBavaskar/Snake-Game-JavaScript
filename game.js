import { SNAKE_SPEED, updateSnake, updateDraw } from './snake.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById('board');

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if(secondsSinceLastRender < (1 / SNAKE_SPEED)) {
    return;
  }

  lastRenderTime = currentTime;

  updateSnake();
  updateDraw(gameBoard);
}

window.requestAnimationFrame(main);
