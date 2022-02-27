const btnLogin = document.querySelector('.btn-header');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');

function login() {
  const email = inputEmail.value;
  const password = inputPassword.value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnLogin.addEventListener('click', login);

$(document).on("keydown", "#TxtObservacoes", function () {
  var caracteresRestantes = 255;
  var caracteresDigitados = parseInt($(this).val().length);
  var caracteresRestantes = caracteresRestantes - caracteresDigitados;
  
  $(".caracteres").text(caracteresRestantes);
});