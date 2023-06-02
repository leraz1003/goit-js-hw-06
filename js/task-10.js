function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const block = document.querySelector('#controls');
const newBox = document.querySelector('#boxes');


const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const input  = block.firstElementChild;

function createBoxes(amount) {
  amount = input.value;
  let initialSize = 30;
  const createBox = document.createElement("div");

  for (let i = 0; i < amount; i++) {
    initialSize += 10;
    createBox.style.width = `${initialSize}px`;
    createBox.style.height = `${initialSize}px`;
    createBox.style.margin = "5px";
    createBox.style.backgroundColor = getRandomHexColor();
  }

  newBox.append(createBox)
}


function destroyBoxes() {
  newBox.remove();
  input.value = 0;
}


createBtn.addEventListener('click', createBoxes)
destroyBtn.addEventListener('click', destroyBoxes);
