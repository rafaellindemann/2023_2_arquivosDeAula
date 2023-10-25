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
let venceu = false

// TODO: Melhorar MUITO o visual :D
// TODO: implementar o botão desistir

function Confirma(){
    
    if(tentativasRestantes > 0){// verificar se tentativas restantes > 0
        let chute = Number(elementoInputPalpiteJogador.value) // ler chute
        console.log("Chute: "+ chute)
        tentativasRestantes-- // diminuir tentativas restantes
        elementoInputRestoTentativas.value = tentativasRestantes // atualizar tentativas restantes na tela
        if(chute == numeroSecreto){// conferir valor x chute 
            alert("Acertou, parabéns :* ")
            venceu = true
            botaoIniciar.disabled = false
            limparDefinicoes()
            // TODO: mostrar a mensagem da frase de efeito
        }else if(chute > numeroSecreto){// dar a dica do resultado
                elementoInputDicasNumero.value = "Chutou alto"
                pontos = pontos - pontosPorTentativa

        }else{
                elementoInputDicasNumero.value = "Chutou baixinho..."
                pontos -= pontosPorTentativa
        }
        if(tentativasRestantes == 0 && venceu == false){ // se foi a última jogada e não venceu...
            // alert("Acabou de perder, bem perdidinho")
            elementoLabelMsgJogador.innerHTML = 'Perdeu. Tente novamente ;P'
            botaoIniciar.disabled = false
            limparDefinicoes()
        }
        if(pontos < 1) {
            pontos = 0
        }
        elementoInputPontosJogador.value = pontos.toFixed(0)
    }else{
        alert("Já acabou...\nVOCÊ PERDEU!\nPode parar")
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
    venceu = false // como pode ser uma nova partida, reseta a variável venceu

    console.log("maximoTentativas: " + maximoTentativas)
    console.log("numeroSecreto: " + numeroSecreto)
}

function Desiste(){

    //alert('oi3')

}

function limparDefinicoes(){
    elementoInputLmtMin.value = ''
    elementoInputLmtMax.value = ''
    elementoInputMaxTentativas.value = ''
}