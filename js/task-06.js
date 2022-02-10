const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', onValidationInputBlur);

function onValidationInputBlur(event) {
  const valueLength = event.currentTarget.value.length;
  const dataLength = Number(validationInputRef.dataset.length);
  
  valueLength === dataLength
    ? validationInputRef.setAttribute('class', 'valid')
    : validationInputRef.setAttribute('class', 'invalid');
}

//====отображатор длины введенной строки для удобства

console.log('Счетчик добавлен динамически, HTML не изменял');

let value = 0;
const title = document.createElement('h1');

validationInputRef.after(title);

validationInputRef.addEventListener('input', onValidationInput);

function onValidationInput(event) {
  value = event.currentTarget.value.length;
  title.textContent = `Вы ввели ${value} символов`;
};
