let inputDirection = {  //snake first move as soon as game starts
  x: 0,
  y: 0
};

let lastDirection = {
  x: 0, 
  y:0
};

const inputBtnGroup = document.querySelectorAll('[data-input-btn]');
inputBtnGroup.forEach(btn => {
  btn.addEventListener('click', () => {
    let key = '';
    switch(btn.id) {
      case 'up-btn':
        key = 'ArrowUp';
        break;
      case 'down-btn':
        key = 'ArrowDown';
        break;
      case 'right-btn':
        key = 'ArrowRight';
        break;
      case 'left-btn':
        key = 'ArrowLeft';
        break;
    }

    const input = {
      key: key
    }
    setInputDirection(input);
  });
})

window.addEventListener('keydown', setInputDirection)

export function getInputDirection() {
  lastDirection = inputDirection;
  return inputDirection;
}

function setInputDirection(event) {
  switch(event.key) {
    case 'ArrowUp':
      if(lastDirection.y !== 0) {
        break;
      }
      inputDirection = { x: 0, y: -1};
      break;
    case 'ArrowDown':
      if(lastDirection.y !== 0) {
        break;
      }
      inputDirection = { x: 0, y: 1};
      break;
    case 'ArrowLeft':
      if(lastDirection.x !== 0) {
        break;
      }
      inputDirection = { x: -1, y: 0};
      break;
    case 'ArrowRight':
      if(lastDirection.x !== 0) {
        break;
      }
      inputDirection = { x: 1, y: 0};
      break;
  }
}
