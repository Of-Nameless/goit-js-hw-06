"use strict"
const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(e) {
    if (e.currentTarget.value !== '') {
       return refs.output.textContent = e.currentTarget.value;
    } 
    return refs.output.textContent = 'Anonymous';    
};