
let dist = document.getElementById('inpDistancia')

function calcularTempo(){
    let distancia = Number(dist.value)
    let tempo = distancia / 300000
    // alert("Tempo: " + tempo + 's')
    document.getElementById('divResultado').innerHTML = "Tempo de viagem: " + tempo.toFixed(2) + 's'

}
