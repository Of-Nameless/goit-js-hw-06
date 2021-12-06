"use strict"
const refs = {
  button: document.querySelector('.change-color'),
  color: document.querySelector('.color')
}

const changeColor = () => {
  const color = getRandomHexColor()
  document.body.style.background = color;
  refs.color.textContent = color;
};

refs.button.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
