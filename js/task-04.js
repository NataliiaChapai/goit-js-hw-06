const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
let counter = 0;

const incrementRef = incrementBtn.addEventListener('click', () =>
{
    counter += 1;
    return counterValue.textContent = counter;
});

const decrementRef = decrementBtn.addEventListener('click', () =>
{
    counter -= 1;
    return counterValue.textContent = counter;
});

