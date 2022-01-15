const inputRef = document.querySelector('input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes')


createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  amount = inputRef.value;
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${ 30 + 10 * i}px`;
    boxes.push(box);
  }
return boxesRef.append(...boxes);
}


function destroyBoxes() {
  boxesRef.innerHTML = '';
  inputRef.value = '';
  }