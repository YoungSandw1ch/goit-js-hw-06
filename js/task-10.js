const refs = {
  controls: document.querySelector('#controls'),
  inputNumber: controls.querySelector('[type="number"]'),
  createBtn: controls.querySelector('[data-create]'),
  destroyBtn: controls.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.inputNumber.addEventListener('blur', getInputValue);
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
  const arrOfDivs = [];

  for (let i = 1, j = 30; i <= amount; i += 1, j += 10) {
    const color = getRandomHexColor();
    const box = document.createElement('div');
    box.style.width = `${j}px`;
    box.style.height = `${j}px`;
    box.style.backgroundColor = color;
    arrOfDivs.push(box);
  }

  refs.boxes.append(...arrOfDivs);
};

function destroyBoxes() {
  refs.boxes.innerHTML = '';
  refs.inputNumber.value = '';
};

//==Добавил очистку поля ввода после удаления обьектов
//==чтоб не приходилось постоянно удалять и по новому набирать

/*
*====вариат создания разметки через insertAdjacentHTML==================
*/

// function createBoxes() {
//   let amount = getInputValue();

//   let htmlString = '';
//   for (let i = 1, j = 30; i <= amount; i += 1, j += 10) {
//     const color = getRandomHexColor();
//     htmlString += `<div style = "width: ${j}px; height: ${j}px; background-color: ${color}"></div>`;
//   }
//   refs.boxes.insertAdjacentHTML('beforeend', htmlString);
// };