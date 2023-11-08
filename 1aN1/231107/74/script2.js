
let numero, maior=0, menor=10, i
i = 0
while(i<15){
    i++
    numero = Number(prompt("Nota: "))

    if(numero > maior){
        maior = numero
    }
    if(numero < menor){ 
        menor = numero
    }
}