
let inputPreco = document.getElementById('inpPreco')
let input1Real = document.getElementById('inp1Real')
let input50Centavos = document.getElementById('inp50centavos')
let input25Centavos = document.getElementById('inp25centavos')
let input10Centavos = document.getElementById('inp10centavos')
let input5Centavos = document.getElementById('inp5centavos')
let resultado = document.getElementById('divResultado')

function calcular(){
    let preco = Number(inputPreco.value)
    // let preco = Number(document.getElementById('inpPreco').value)

    let quantidade1Real = Number(input1Real.value)
    let quantidade50Centavos = Number(input50Centavos.value)
    let quantidade25Centavos = Number(input25Centavos.value)
    let quantidade10Centavos = Number(input10Centavos.value)
    let quantidade5Centavos = Number(input5Centavos.value)

    let valorTotal = quantidade1Real + quantidade50Centavos*0.5 + quantidade25Centavos*0.25 + quantidade10Centavos*0.1 + quantidade5Centavos*0.05

    resultado.innerHTML = "Valor total R$"+valorTotal.toFixed(2) + 
        "<BR>Preço do produto R$" + preco.toFixed(2)
    
    if(valorTotal >= preco){
        resultado.innerHTML += "<br>Valor suficiente pra comprar"
    }else{
        resultado.innerHTML += "<br>Valor insuficiente pra comprar"
    }


}