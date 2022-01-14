const bodyRef = document.querySelector('body')
const colorRef = document.querySelector('.color');
const changeColorRef = document.querySelector('.change-color')

changeColorRef.addEventListener('click', onButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonClick() {
  bodyRef.setAttribute('style', `background-color: ${getRandomHexColor()};`);
  colorRef.textContent = getRandomHexColor();
}