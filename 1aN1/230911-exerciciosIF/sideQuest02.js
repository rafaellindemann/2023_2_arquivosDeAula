
let aleatorio, chute  
//aleatorio = Math.random()
// aleatorio = Math.random() * 10
// aleatorio = Math.ceil(aleatorio)

aleatorio = Math.ceil( Math.random() * 10 )
chute = Number( prompt("Adivinhe o número: ") )

if(chute == aleatorio) {
    alert("Parabéns, você acertou!")
}else if(chute < aleatorio){
    alert("Chutou muito baixo!\nEra: " + aleatorio)
}else{
    alert("Chutou muito alto!\nEra: " + aleatorio)
}


console.log(aleatorio)

// para consultar sobre o Math.random
// https://www.w3schools.com/js/js_random.asp

