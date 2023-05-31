function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const newBox = document.querySelector('#boxes');
const createBox = document.createElement('div');
createBox.style.size = 30px;



function createBoxes(amount){
  
}