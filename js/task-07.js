const refs = {
  sizeControler: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.sizeControler.addEventListener('input', onSizeControlerInput);

refs.text.style.fontSize = `${refs.sizeControler.value}px`;

function onSizeControlerInput(event) {
  const size = event.currentTarget.value;

  refs.text.style.fontSize = `${size}px`;
};