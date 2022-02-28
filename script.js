const btnLogin = document.querySelector('.btn-header');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const submitBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');


submitBtn.disabled = true;

function login() {
  const email = inputEmail.value;
  const password = inputPassword.value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function counteChars(e) {
  const inputLength = textArea.value.length;
  const limit = 500;
  const rest = limit - inputLength;
  counter.innerHTML = rest;
  if (inputLength > 499) {
    e.preventDefault();
  }
}

function submitPrevent() {
  submitBtn.disabled = false;
  if (agreement.checked === false) {
    submitBtn.disabled = true;
  }
}

btnLogin.addEventListener('click', login);
textArea.addEventListener('keyup', counteChars);
agreement.addEventListener('click', submitPrevent);

function enviar(event) {
}
submitBtn.addEventListener('click', enviar);
