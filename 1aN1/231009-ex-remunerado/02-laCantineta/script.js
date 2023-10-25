
let lanches = document.getElementById('selLanches')
let inputQtd = document.getElementById('inpQtd')
let inputPreco = document.getElementById('inpPreco')
let inputTotal = document.getElementById('inpTotal') 
function calcular(){
    let preco
    switch(Number(lanches.value)){
        case 1: preco = 4
        break
        case 2: preco = 4.5
        break
        case 3: preco = 5
        break
        case 4: preco = 2
        break
        case 5: preco = 1.5
        break
    }

    let qtd = Number(inputQtd.value)
    if(qtd > 3){
        preco = preco - preco*0.172
    }
    let total = qtd * preco

    inputPreco.value = preco
    inputTotal.value = total
}

function selecionar(){
    // alert(lanches.value)
    let preco
    switch(Number(lanches.value)){
        case 1: preco = 4
        break
        case 2: preco = 4.5
        break
        case 3: preco = 5
        break
        case 4: preco = 2
        break
        case 5: preco = 1.5
        break
    }

    let qtd = Number(inputQtd.value)
    if(qtd > 3){
        preco = preco - preco*0.172
    }
    inputPreco.value = preco
}