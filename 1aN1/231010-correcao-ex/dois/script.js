
let lanches = document.getElementById('selLanches')
let qtd = document.getElementById('inpQtd')
let preco = document.getElementById('inpPreco')
let total = document.getElementById('inpTotal')

function calcularValor(){
    let valorUnitario;
    switch(lanches.value){
        case '1': valorUnitario = 4
        break
        case '2': valorUnitario = 4.5
        break
        case '3': valorUnitario = 5
        break
        case '4': valorUnitario = 2
        break
        case '5': valorUnitario = 1.5
    }

    let valorTotal = valorUnitario * Number(qtd.value)
    let desconto = 0
    if(Number(qtd.value) > 3){
        desconto = valorTotal * 0.172 // 17.2/100
    }
    valorTotal = valorTotal - desconto

    preco.value = valorUnitario
    total.value = valorTotal
}