function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const colorValue = document.querySelector('.color');
const btnClick = document.querySelector('.change-color');
const changeBodyColor = document.querySelector('body')


btnClick.addEventListener('click', (event) => {
  colorValue.textContent = getRandomHexColor();
  changeBodyColor.style.backgroundColor = colorValue.textContent;
})
