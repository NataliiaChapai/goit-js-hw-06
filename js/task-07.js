const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
inputRef.value = 0;
const fontSizeChange = inputRef.addEventListener('input', (event) => {
    const fontSize = event.currentTarget.value;
    textRef.setAttribute('style', `font-size: ${fontSize}px;`)
})