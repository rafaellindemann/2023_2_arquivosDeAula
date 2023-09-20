

function verificarMaior()
{
    let n1 = document.getElementById('inpNumero1')
    let n2 = document.getElementById('inpNumero2')
    let numero1 = Number(n1.value)
    let numero2 = Number(n2.value)

    if(numero1 > numero2){
        alert("Numero 1 é maior")
    }else{
        if(numero2 > numero1){
            alert("Numero 2 é maior")
        }else{
            alert("Os dois números são iguais")
        }
    }
}

