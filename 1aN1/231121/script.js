
// let pets = []
// let pets = ['Barbie', 'Sansa', 'Melancio']
// pets.length //3

// pets.push('Leaozinho')
// // ['Barbie', 'Sansa', 'Melancio', 'Leaozinho']

// // pets.length //4

// console.log(pets)


let pets = ['Barbie', 'Sansa', 'Melancio', 'Carlos Alberto']

let nomePesquisado = prompt('Digite o nome do monstrinho:')
// nomePesquisado = nomePesquisado.toUpperCase().trim()

let posicao = -1 // a posição do elemento encontrado para o fofinho lembrar quando chegar em casa
for(i=0; i<pets.length; i++){
    
    if(nomePesquisado == pets[i]){
        alert("Achei!!!!")
        posicao = i
    }
    // if(nomePesquisado.toUpperCase().trim() == pets[i].toUpperCase().trim()){
    //     alert("uppercase")
    // }
}
if(posicao == -1){
    alert("Não tá aqui")
}

console.log(posicao)




// 'Sansa' 'sansa' 'SANSA'
