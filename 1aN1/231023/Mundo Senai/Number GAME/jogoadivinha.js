let elementoInputLmtMin = document.getElementById('lmtMin')
let elementoInputLmtMax = document.getElementById('lmtMax')
let elementoInputMaxTentativas = document.getElementById('maxTentativas')
let elementoInputPalpiteJogador = document.getElementById('palpiteJogador')
let elementoInputRestoTentativas = document.getElementById('restoTentativas')
let elementoLabelMsgJogador = document.getElementById('msgJogador')
let elementoInputPontosJogador = document.getElementById('pontosJogador')
let elementoInputDicasNumero = document.getElementById('dicasNumero')
let botaoIniciar = document.getElementById('btIniciar')
let numeroSecreto
let maximoTentativas, tentativasRestantes
let pontuacao, pontosPorTentativa

// TODO: Implementar o 'perdeu'
// TODO: Reabilitar o iniciar
// TODO: resolver o '-0'
// TODO: Melhorar MUITO o visual :D
// TODO: se acertou, habilitar o iniciar
// se perder, habilitar o iniciar

// TODO: limpar input e focus nele

function Confirma(){
    
    if(tentativasRestantes > 0){// verificar se tentativas restantes > 0
        let chute = Number(elementoInputPalpiteJogador.value) // ler chute
        console.log("Chute: "+ chute)
        tentativasRestantes-- // diminuir tentativas restantes
        elementoInputRestoTentativas.value = tentativasRestantes // atualizar tentativas restantes na tela
        if(chute == numeroSecreto){// conferir valor x chute 
            alert("Acertou, parabéns :* ")
            // TODO: mostrar a mensagem da frase de efeito
        }else if(chute > numeroSecreto){// dar a dica do resultado
                elementoInputDicasNumero.value = "Chutou alto"
                pontos = pontos - pontosPorTentativa

        }else{
                elementoInputDicasNumero.value = "Chutou baixinho..."
                pontos -= pontosPorTentativa
        }

        elementoInputPontosJogador.value = pontos.toFixed(0)

    }else{
        alert("Acabou...\nVOCÊ PERDEU!")
    }
    elementoInputPalpiteJogador.value = ''
    elementoInputPalpiteJogador.focus()
}

function Inicia(){
    numeroSecreto = Math.floor(Math.random() * (Number(elementoInputLmtMax.value) - Number(elementoInputLmtMin.value) + 1) + Number(elementoInputLmtMin.value))

    maximoTentativas = Number(elementoInputMaxTentativas.value)
    tentativasRestantes = maximoTentativas
    elementoInputRestoTentativas.value = tentativasRestantes
    botaoIniciar.disabled = true // desabilitar o botão iniciar
    pontosPorTentativa = 100 / maximoTentativas
    pontos = 100
    elementoInputPontosJogador.value = pontos

    console.log("maximoTentativas: " + maximoTentativas)
    console.log("numeroSecreto: " + numeroSecreto)
}

function Desiste(){

    //alert('oi3')

}