const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  const isFull = event.currentTarget.value;
  refs.output.textContent = isFull ? isFull : "Anonymous";
}