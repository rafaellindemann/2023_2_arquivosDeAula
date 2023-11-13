

for(let i=1; i<=500; i++) {
    let valor = (i*0.33)
    let id = 'centena' + parseInt(i / 100)

    document.getElementById(id).innerHTML += `${i}: R$${valor.toFixed(2)}<br>`
}