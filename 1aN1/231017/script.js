
// let numeroMagico = Math.random() // gera um número entre 0 e 1
// let numeroMagico = Math.random() * 10 // aumenta o range de possibilidade do número. Agora temos um número entre 0 e 10
// let numeroMagico = Math.floor(Math.random() * 10) // arredonda pra baixo, sempre
let numeroMagico = Math.ceil(Math.random() * 10) // arredonda pra cima, sempre

// Math.round

document.getElementById('divCima').innerHTML = numeroMagico


// random >> 0.998235745983795847
// *10 >> 9.98235745983795847
// floor >> 9
// ceil >> 10

console.log(numeroMagico)
