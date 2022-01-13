const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const fontSizeChange = inputRef.addEventListener('input', (event) => {
    const fontSize = event.currentTarget.value;
    textRef.setAttribute('style', `font-size: ${fontSize}px;`)
})