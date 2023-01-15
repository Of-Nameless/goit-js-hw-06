const refs = {
    input: document.getElementById('name-input'),
    output: document.getElementById('name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(e) {
    if (refs.input.value === '') {
        return refs.output.textContent = 'Anonymous';
    } return refs.output.textContent = e.currentTarget.value
} 