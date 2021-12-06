"use strict"
const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.text.style.fontSize = `${refs.input.value}px`;

function onRangeChange(e) {
    const { value } = e.target;
    refs.text.style.fontSize = `${value}px`;
};

refs.input.addEventListener('input', onRangeChange);