const refs = {
  controls: document.querySelector('#controls'),
  inputNumber: controls.querySelector('[type="number"]'),
  createBtn: controls.querySelector('[data-create]'),
  destroyBtn: controls.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.inputNumber.addEventListener('change', getInputValue);
refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

function getInputValue() {
  return Number(refs.inputNumber.value);
};


function createBoxes() {
  let amount = getInputValue();

  let htmlString = '';
  for (let i = 1, j = 30; i <= amount; i += 1, j += 10) {
    const color = getRandomHexColor();
    htmlString += `<div style = "width: ${j}px; height: ${j}px; background-color: ${color}"></div>`;
  }
  refs.boxes.insertAdjacentHTML('beforeend', htmlString);
};

function destroyBoxes() {
  refs.boxes.innerHTML = '';
  refs.inputNumber.value = '';
};

//==Добавил очистку поля ввода после удаления обьектов
//==чтоб не приходилось постоянно удалять и по новому набирать