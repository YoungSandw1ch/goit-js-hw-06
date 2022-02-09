const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');
let counterValue = 0;

decrementBtnRef.addEventListener('click', () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});

incrementBtnRef.addEventListener('click', () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});