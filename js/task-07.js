const refs = {
    input: document.getElementById('font-size-control'),
    text: document.getElementById('text'),
};

refs.text.style.fontSize = `${refs.input.value}px`

refs.input.addEventListener('input', onInputChange);

function onInputChange(e) {
    refs.text.style.fontSize = `${e.currentTarget.value}px`
}