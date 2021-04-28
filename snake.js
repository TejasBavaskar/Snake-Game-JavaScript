import { getInputDirection } from './input.js';

export const SNAKE_SPEED = 2;
const snakeBody = [
  {x: 10, y: 10}, //snake start  location
];

export function updateSnake() {
  for(let i=snakeBody.length-1; i>=1; i--) {
    snakeBody[i] = {...snakeBody[i-1]};
  }

  const inputDirection = getInputDirection()
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function updateDraw(gameBoard) {
  gameBoard.innerHTML = '';
  snakeBody.forEach(item => {
    const snakeElement = document.createElement('div');
    snakeElement.classList.add('snake');
    snakeElement.style.gridRowStart = item.y;
    snakeElement.style.gridColumnStart = item.x;
    gameBoard.appendChild(snakeElement);
  })
}
