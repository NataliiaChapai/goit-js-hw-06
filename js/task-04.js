const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
counterValue.textContent = 0;

const incrementRef = incrementBtn.addEventListener('click', () =>
    counterValue.textContent = Number(counterValue.textContent) + 1);

const decrementRef = decrementBtn.addEventListener('click', () =>
    counterValue.textContent -= 1);

