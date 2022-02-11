const refs = {
  controls: document.querySelector('#controls'),
  inputNumber: controls.querySelector('[type="number"]'),
  createBtn: controls.querySelector('[data-create]'),
  destroyBtn: controls.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};
console.log(refs.inputNumber);
console.log(refs.createBtn);
console.log(refs.destroyBtn);

refs.addEventListener('change', )
refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function createBoxes(amount) {
  let htmlString = '';
  for (let i = 1, j = 30; i <= amount; i += 1, j += 10) {
    htmlString += `<div width="${j}" height="${j}"></div>`;
  }
  refs.boxes.insertAdjacentHTML('afterbegin', htmlString);
};

function destroyBoxes() {
  refs.boxes.innerHTML = '';
};
