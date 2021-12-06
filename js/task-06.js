"use strict"
const input = document.querySelector('#validation-input');
const length = input.getAttribute('data-length');

input.addEventListener('blur', onBlur);

function onBlur() {
    input.classList.add('invalid')

    input.value.length === Number(length) ?
        input.classList.replace('invalid', 'valid') :
        input.classList.replace('valid', 'invalid');
};