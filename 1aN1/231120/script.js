let pets = []

let inputPet = document.getElementById('inpPet')
let inputPesquisa = document.getElementById('inpPesquisa')

function cadastrar(){
    
    // ler o valor no input
    let pet = inputPet.value
    
    // empurrar pra dentro do vetor
    pets.push(pet)
    
    console.log(pets)
    
    inputPet.value = ''
    inputPet.focus()
}


function pesquisar(){
    let petPesquisado = inputPesquisa.value
    for(i=0; i<pets.length; i++){
        if(petPesquisado == pets[i]){
            alert('Achei: ' + pets[i])
        }
    }
}
