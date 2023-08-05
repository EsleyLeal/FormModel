const form = document.querySelector('#form');
const nameInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const jobSelect = document.querySelector('#job');
const messageTextarea = document.querySelector('#message');

// Janela Modal 

function mostrarModal(mensagem) {
    const modal = document.getElementById('modal');
    const modalMensagem = document.getElementById('modal-mensagem');
    modalMensagem.textContent = mensagem;
    modal.style.display = 'block';
  }
  
  function fecharModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
  form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    // Verifica se o nome esta vazio
    if(nameInput.value === "") {
        mostrarModal('Porfavor, preencha o seu nome')
        return;
    }
    // Verifica se o email esta preenchido e se é valido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        mostrarModal('Porfavor, preencha o seu email');
        return;
    }

    // Verifica se a senha esta preenchida
    if(!validaPassword(passwordInput.value, 8)){
        mostrarModal('A senha precisa ter no minimo 8 digitos');
        return;
    }
    //Verifica se a situação foi selecionada
    if(jobSelect.value === ""){
        mostrarModal('Porfavor, selecione a sua situação');
        return;
    }

    // Verifica se a menssagem esta preenchida
    if(messageTextarea.value === "") {
        mostrarModal('Porfavor, escreva uma mensagem');
        return;
    }


    // Se todos os campos estiverem corretamente preenchidos , enviei o form
    form.submit();
});
  

// Função que valida E-mail
function isEmailValid(email){

//criar uma regex para validar email
const emailRegex = new RegExp(
    //usuario12@host.com.br
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/

);

if(emailRegex.test(email)) {
    return true
}
return false;
};

// Função que valida a senha

function validaPassword(password, minDigits) {
    if(password.length >= minDigits) {
        // Senha valida
        return true
    }
    // Senha invalida
    return false
}



