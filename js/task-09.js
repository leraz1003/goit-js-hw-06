function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBgColor = document.querySelector('.widget')
const colorValue = document.querySelector('.color');
const btnClick = document.querySelector('.change-color');


btnClick.addEventListener('click', (event)=>{
  colorValue.textContent = getRandomHexColor();
  changeBgColor.style.backgroundColor = getRandomHexColor();
})
