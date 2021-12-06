"use strict"

let counterValue = 0;

const refs = {
    increment: document.querySelector(`[data-action='increment']`),
    decrement: document.querySelector(`[data-action='decrement']`),
    counterValue: document.querySelector('#value'),
}

const changeValue = (step) => {
    counterValue += step;
    refs.counterValue.textContent = counterValue;
};

refs.increment.addEventListener('click', () => changeValue(+1));
refs.decrement.addEventListener('click', () => changeValue(-1));




