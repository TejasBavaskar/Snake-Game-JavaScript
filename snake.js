import { getInputDirection } from './input.js';

export let SNAKE_SPEED = 5;
let snakeBody = [
  {x: 10, y: 10}, //snake start  location
];
export let newSegment = 0;

const speedUpBtn = document.querySelector('.speed-up-btn');
speedUpBtn.addEventListener('click', ()=> {
  if(SNAKE_SPEED >=0 && SNAKE_SPEED<10) {
    SNAKE_SPEED++;
  }
});

const speedDownBtn = document.querySelector('.speed-down-btn');
speedDownBtn.addEventListener('click', ()=> {
  if(SNAKE_SPEED >1 && SNAKE_SPEED<=10) {
    SNAKE_SPEED--;
  }
});

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

export function getSnakeHead() {
  return snakeBody[0];
}

export function isSnakeIntersect() {
  return snakeBody.some((item, index) => {
    if(index === 0) {
      return false;
    }
    return item.x === snakeBody[0].x && item.y === snakeBody[0].y;
  })
}

export function restartSnake() {
  snakeBody = [
    {x: 10, y: 10}, //snake start  location
  ];
}
