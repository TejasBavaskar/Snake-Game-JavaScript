import { getInputDirection } from './input.js';

export const SNAKE_SPEED = 5;
const snakeBody = [
  {x: 21, y: 21}, //snake start  location
];
let newSegment = 0;

export function updateSnake() {
  addSegmentToSnake();
  for(let i=snakeBody.length-1; i>=1; i--) {
    snakeBody[i] = {...snakeBody[i-1]};
  }

  const inputDirection = getInputDirection()
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function drawSnake(gameBoard) {
  snakeBody.forEach(item => {
    const snakeElement = document.createElement('div');
    snakeElement.classList.add('snake');
    snakeElement.style.gridRowStart = item.y;
    snakeElement.style.gridColumnStart = item.x;
    gameBoard.appendChild(snakeElement);
  })
}

export function expandSnake(amount) {
  newSegment += amount;
}

export function isSnakeOnFood(foodPosition) {
  return snakeBody.some(item => {
    return item.x === foodPosition.x && item.y === foodPosition.y;
  })
}

function addSegmentToSnake() {
  for(let i=0; i<newSegment; i++) {
    snakeBody.push({...snakeBody[snakeBody.length-1]});
  }

  newSegment = 0;
}
