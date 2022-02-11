const refs = {
  loginForm: document.querySelector('.login-form'),
  inputEmail: document.querySelector('[name="email"]'),
  inputPassword: document.querySelector('[name="password"]'),
  submitBtn: document.querySelector('[type="submit"]'),
};

refs.loginForm.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();
  const { elements: { email, password } } = event.currentTarget;

  if (email.value && password.value) {
    const data = {
      email: email.value,
      password: password.value
    }

    console.log(data);
    event.currentTarget.reset();
    return;
  }

  alert('Please fill in all the fields!');
};

//=====убрать warning "Input elements should have autocomplete attributes"
refs.inputPassword.setAttribute('autocomplete', 'on');