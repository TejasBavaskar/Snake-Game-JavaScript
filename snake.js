export const SNAKE_SPEED = 1;
const snakeBody = [
  {x: 12, y:11},
  {x: 13, y:11},
  {x: 14, y:11},
];

export function updateSnake() {
  for(let i=snakeBody.length-1; i>=1; i--) {
    snakeBody[i] = {...snakeBody[i-1]};
  }

  snakeBody[0].x += 1;
  snakeBody[0].y += 0;
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
