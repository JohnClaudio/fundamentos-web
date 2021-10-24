/*
Case Sensitive = reconhece letras maiusculas e minusculas
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/


let status = {
    emailStatus: document.getElementById('emailStatus'),
    nomeStatus: document.getElementById('nomeStatus'),
    menssagemStatus: document.getElementById('mensagemStatus')
}

let InputForm = {
    nome: document.getElementById('nome'),
    email: document.getElementById('email'),
    mensagem: document.getElementById('mensagem')
}

function validaNome(nome) {
    
    let nome_superior_tresCaracteres = nome.length > 3

        if(nome_superior_tresCaracteres == true)
        {
            nomeStatus.innerHTML = "Nome OK"
            nomeStatus.style.color = 'green'
            return true;
        }
        else
        {
            nomeStatus.innerHTML = "nome: minimo três caracteres"
            nomeStatus.style.color = 'red'
            return false;
        }
 
        return false;
        
    }

 

function validaEmail(email) {
   
   if (email.indexOf('@') == -1 || email.indexOf('.') == -1 ) {
      emailStatus.innerHTML = 'E-mail inválido'
      emailStatus.style.color = 'red'
      return false
   } else {
    emailStatus.innerHTML = 'E-mail válido'
    emailStatus.style.color = 'green'
      return true
   }
}

function validaMensagem() {

   if (mensagem.value.length >= 100) {
    mensagemStatus.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
    mensagemStatus.style.color = 'red'
    mensagemStatus.style.display = 'block'
    return false
   } else {
    mensagemStatus.innerHTML = mensagem.value.length + ' / 100 caracteres'
    mensagemStatus.style.display = 'block'
    return true
   }
}

function enviar() {
    validacaoNome = validaNome(nome.value)
    validacaoEmail = validaEmail(email.value)
    validacaoMensagem = validaMensagem()

   if (validacaoNome == true && validacaoEmail == true && validacaoMensagem == true) {
      alert ('Formulário enviado com sucesso!')
   } else {
      alert ('Preencha o formulário corretamente antes de enviar...')
   }
}

