const refs = {
    increment: document.querySelector('[data-action="increment"]'),
    decrement: document.querySelector('[data-action="decrement"]'),
    counter: document.querySelector('#value'),
};

let counterValue = 0;

const changeValue = (e) => {
    counterValue += e;
    refs.counter.textContent = counterValue
};

refs.increment.addEventListener('click', () => changeValue(+1));
refs.decrement.addEventListener('click', () => changeValue(-1))
