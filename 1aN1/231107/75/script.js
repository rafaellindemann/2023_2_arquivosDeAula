
let tabela = document.getElementById('divTabela')
let cont = 0

while(cont < 500){
    cont++
    tabela.innerHTML +=  cont + ' : R$' + (cont*0.33).toFixed(2) + '<br>'
}

// colocar sem dó na prova.

