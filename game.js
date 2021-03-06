import { SNAKE_SPEED, updateSnake, drawSnake, getSnakeHead, isSnakeIntersect, restartSnake } from './snake.js';
import { updateFood, drawFood } from './food.js';
import { isSnakeOutsideGride } from './grid.js';

let lastRenderTime = 0;
let isGameOver = false;
const gameBoard = document.getElementById('board');

function main(currentTime) {
  if(isGameOver) {
    document.querySelector('[data-lost-text]').innerText = `You Lost!!`;

    const lostElement = document.querySelector('.lost-msg');
    lostElement.classList.add('show');

    const restartBtn = document.getElementById('restart-btn');

    restartBtn.addEventListener('click', () => {
      isGameOver = false;
      lostElement.classList.remove('show');
      restartSnake();
    });
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if(secondsSinceLastRender < (1 / SNAKE_SPEED)) {
    return;
  }

  lastRenderTime = currentTime;

  update();
  drawItems();
  checkDeath();
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

function checkDeath() {
  isGameOver = isSnakeOutsideGride(getSnakeHead()) || isSnakeIntersect();
}
