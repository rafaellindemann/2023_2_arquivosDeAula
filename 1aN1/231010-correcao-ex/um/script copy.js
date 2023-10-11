

let inputUsuario = document.getElementById('inpUsuario')
let inputSenha = document.getElementById('inpSenha')

function fazerLogin(){

    if(inputUsuario.value == 'adm' && inputSenha.value == 'adm123'){
        alert('Login efetuado com sucesso')
    }else{
        alert('Dados incorretos')
    }
}

// if(inputUsuario.value == 'adm'){
//     if(inputSenha.value == 'adm123'){
//         alert('Login efetuado com sucesso')
//     }else{
//         alert('Dados incorretos')
//     }
// }else{
//     alert('Dados incorretos')
// }