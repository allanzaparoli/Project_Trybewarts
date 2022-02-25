let btnLogin = document.querySelector('.btn-header');
let inputEmail = document.querySelector('#email');
let inputPassword = document.querySelector('#password')

function login(e){
    let email = inputEmail.value;
    let password = inputPassword.value
     if(email == "tryber@teste.com" && password == "123456"){
    alert('Olá, Tryber!');
    }
 console.log(email);   
}

 btnLogin.addEventListener("click",login) 
