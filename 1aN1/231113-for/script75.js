
let tabela = document.getElementById('divTabela');

for(let i=1; i<=500; i++) {
    let valor = i*0.33
    tabela.innerHTML += `${i}: R$${valor.toFixed(2)}<br>`
    tabela.innerHTML += i + ': R$' + valor.toFixed(2) + '<br>'
}

