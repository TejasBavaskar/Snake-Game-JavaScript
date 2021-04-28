import { isSnakeOnFood, expandSnake } from './snake.js';
import { randomGridPosition } from './grid.js';

const EXPAND_RATE = 1;
let foodPosition = getRandomFoodPosition();

export function updateFood() {
  if(isSnakeOnFood(foodPosition)) {
    expandSnake(EXPAND_RATE);
    foodPosition = getRandomFoodPosition();
  }
}

export function drawFood(gameBoard) {
  const foodElement = document.createElement('div');
  foodElement.classList.add('food');
  foodElement.style.gridRowStart = foodPosition.y;
  foodElement.style.gridColumnStart = foodPosition.x;
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newPosition = randomGridPosition();
  while(isSnakeOnFood(newPosition) || newPosition === null) {
    newPosition = randomGridPosition();
  }

  return newPosition;
}
