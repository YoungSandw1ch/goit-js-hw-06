const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', onValidationInputBlur);

function onValidationInputBlur(event) {
  const valueLength = event.currentTarget.value.length;
  const dataLength = Number(validationInputRef.dataset.length);
  
  if (valueLength === dataLength) {
    validationInputRef.setAttribute('class', 'valid');
  } else {
    validationInputRef.setAttribute('class', 'invalid');
  }
};

/*
*====отображатор длины введенной строки для удобства========
*/

console.log('Счетчик добавлен динамически, HTML не изменял');

let value = 0;
const title = document.createElement('h1');
title.style.fontSize = '16px';

validationInputRef.after(title);

validationInputRef.addEventListener('input', onValidationInput);

function onValidationInput(event) {
  value = event.currentTarget.value.length;
  title.textContent = `Вы ввели ${value} символов`;
};

/*
*==автоматически меняет цвет бордера в зависимости от длины==
*/

// validationInputRef.addEventListener('input', onInputChangeBorder);

// function onInputChangeBorder(event) {
//   const length = event.currentTarget.value.length;
//   const rightLength = Number(validationInputRef.dataset.length);
//   validationInputRef.style.outline = 'transparent';

//   validationInputRef.style.borderColor = length !== rightLength ? 'red' : 'green';
// };