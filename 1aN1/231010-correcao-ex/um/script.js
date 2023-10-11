

let inputUsuario = document.getElementById('inpUsuario')
let inputSenha = document.getElementById('inpSenha')

function fazerLogin(){
    let usuario = inputUsuario.value
    let senha = inputSenha.value

    if(usuario == 'adm' && senha == 'adm123'){
        alert('Login efetuado com sucesso')
    }else{
        alert('Dados incorretos')
    }
}