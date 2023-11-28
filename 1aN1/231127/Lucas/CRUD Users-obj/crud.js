// Vetor onde ficarão os usuários 


let usuarios = []

// Pega os elementos pelos seus ID's e armazena em variáveis
let elementoInputUser = document.getElementById('inptUser')
let elementoInputCPF = document.getElementById('inptCPF')
let elementoInputIdade = document.getElementById('inptIdade')

let elementoDivLista = document.getElementById('lista')
let elementoInputPesquisa = document.getElementById('inptPesquisa')

// Variáveis 
let userPesquisa = ''
let posPesquisa = ''

// Cadastrar
function Cadastrar(){

    let usuario = {
        nome: elementoInputUser.value,
        cpf: elementoInputCPF.value,
        idade: elementoInputIdade.value
    }

    usuarios.push(usuario)
    
    // mesma coisa, mas feita no estilo Number(prompt())
    // usuarios.push({
    //     nome: elementoInputUser.value,
    //     cpf: elementoInputCPF.value,
    //     idade: elementoInputIdade.value
    // })


    // users.push(elementoInputUser.value)
    // cpfs.push(elementoInputCPF.value)
    // idades.push(elementoInputIdade.value)
    Listar()
    alert('Deu bom! =D')
    elementoInputUser.value = ''
    elementoInputCPF.value = ''
    elementoInputIdade.value = ''
    elementoInputUser.focus()
}

// Listar
function Listar(){

    elementoDivLista.innerHTML = ''
    for(i=0; i<usuarios.length; i++){
        elementoDivLista.innerHTML +=  
        `<div class="card">
            Nome: ${usuarios[i].nome} <br>
            CPF: ${usuarios[i].cpf} <br>
            Idade: ${usuarios[i].idade} 
        </div>`
    }

    // elementoDivLista.innerHTML = users + '<br>'
    // elementoDivLista.innerHTML += cpfs + '<br>'
    // elementoDivLista.innerHTML += idades
}

// Pesquisar
function Pesquisar(){

    userPesquisa = elementoInputPesquisa.value
    posPesquisa = users.indexOf(userPesquisa)
    
    if(posPesquisa != -1){
        elementoInputUser.value = userPesquisa
        elementoInputPesquisa.value = ''
        alert('Usuário encontrado! :)')
    }else{
        alert('Usuário NÃO encontrado! :)')
    }

}

// Editar
function Editar(){

    users[posPesquisa] = elementoInputUser.value
    Listar()
    alert('Usuário editado! :B')

}

// Deletar
function Deletar(){

    users.splice(posPesquisa, 1)
    Listar()
    alert('Usuário deletado! :X')

}





