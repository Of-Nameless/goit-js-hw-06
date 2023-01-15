const input = document.getElementById('validation-input');
const length = input.getAttribute('data-length');

input.addEventListener('blur', onBlurInput);

function onBlurInput() {
    input.classList.add('valid');

    if (input.value.length !== Number(length)) {
        return input.classList.replace('valid', 'invalid');
    } return input.classList.replace('invalid', 'valid');
};