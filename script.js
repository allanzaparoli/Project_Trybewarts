const btnLogin = document.querySelector('.btn-header');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const submitBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const dadosForm = document.querySelector('#evaluation-form');
const vlrMateria = [];
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

function chamarEvento(event) {
  event.preventDefault();
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const nomeCompleto = `${nome} ${sobrenome}`;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const familia = document.querySelector('.family:checked').value;
  const avaliacao = document.querySelector('.rate:checked').value;
  const comentario = document.getElementById('textarea').value;
  const materia = document.querySelectorAll('.subject:checked');
  for (let index = 0; index < materia.length; index += 1) {
    vlrMateria.push(materia[index].value);
  }
  const printMaterias = vlrMateria.join(', ');
  dadosForm.innerHTML = `<p>Nome: ${nomeCompleto}</p> <p>Email: ${email}</p> <p>Casa: ${casa}</p> 
  <p>Família: ${familia}</p> <p>Matérias: ${printMaterias}</p> <p>Avaliação: ${avaliacao}</p> 
  <p>Observações: ${comentario}</p>`;
}
submitBtn.addEventListener('click', chamarEvento);
