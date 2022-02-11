const refs = {
  body: document.querySelector('body'),
  colorValue: document.querySelector('.color'),
  changeColorBtn: document.querySelector('.change-color'),
}

refs.changeColorBtn.addEventListener('click', changeBodyBgColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function changeBodyBgColor() {
  const color = getRandomHexColor();

  refs.body.style.backgroundColor = color;
  refs.colorValue.textContent = color;
}
