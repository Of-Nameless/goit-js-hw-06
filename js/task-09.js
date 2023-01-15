const refs = {
  button: document.querySelector('.change-color'),
  text: document.querySelector('.color'),
}

refs.button.addEventListener('click', onButtonChange);

function onButtonChange() {
  refs.text.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
