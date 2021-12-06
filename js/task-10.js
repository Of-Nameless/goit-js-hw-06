"use strict"
const refs = {
  create: document.querySelector('button[data-create]'),
  destroy: document.querySelector('button[data-destroy]'),
  input: document.querySelector('input'),
  container: document.querySelector('#boxes')
}

refs.create.addEventListener('click', onCreateElement);
refs.destroy.addEventListener('click', destroyBoxes);

let elementSize = 20;

function onCreateElement() {
  const currentValue = Number(refs.input.value);
  const fragment = document.createDocumentFragment();
  
  destroyBoxes();

  for (let i = 0; i < currentValue; i += 1){
    const div = createBoxes();
    fragment.append(div);
  };

  refs.container.append(fragment);
  refs.input.value = '';
};

function createBoxes() {
  const box = document.createElement('div');
  elementSize += 10;
  const boxStyle = box.style;
  boxStyle.width = elementSize + 'px';
  boxStyle.height = elementSize + 'px';
  boxStyle.background = getRandomHexColor();
  return box;
};

function destroyBoxes() {
  refs.container.innerHTML = '';
  elementSize = 20;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
