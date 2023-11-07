let resultado = document.getElementById('divResultado')
let numero, maior, menor, i
i = 0
while(i<15){
    i++
    numero = Number(prompt("Número: "))
    if(i==1){
        maior = numero
        menor = numero
    }
    if(numero > maior){
        maior = numero
    }
    if(numero < menor){
        menor = numero
    }
}

resultado.innerHTML = `Maior: ${maior}<BR>Menor: ${menor}`
