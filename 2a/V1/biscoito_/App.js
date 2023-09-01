import React , { useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState("")

  let frases = [
    "Os defeitos são mais fortes quando o amor é fraco.",
    "Sem o fogo do entusiasmo, não há o calor da vitória.",
    "Uma bela flor é incompleta sem suas folhas.",
    "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
    "Não importa o tamanho da montanha, ela não pode tapar o sol.",
    "Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
    "Alguns biscoitos da sorte não contêm nenhuma sorte",
    "Agente 56, o restaurante foi comprometido, abortar missão. ABORTAR MISSÃO!",
    "Abençoadas são as crianças pois elas vão herdar o débito nacional",
    "Volte depois... estou dormindo (sim, biscoitos da sorte também precisam de seu sono)",
    "Um homem tolo escuta seu coração, um homem sábio escuta os biscoitos"
  ]
  function quebraBiscoito() {
    let n = Math.floor(Math.random() * frases.length)
    setTextoFrase('"' + frases[n] + '"')
    setImg(require('./src/biscoitoAberto.png'))
    console.log(n);
  }
  
  function reiniciar() {
    setImg(require('./src/biscoito.png'))
    setTextoFrase('')
    
  }

  return (
    <View style={styles.container}>
      <Image 
        source={img}
        style={styles.img}
      />

      <Text style={styles.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>
            Quebrar Biscoito
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor: '#121212'}]} onPress={ reiniciar}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, {color:'#121212'}]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    width: 230,
    height: 230
  },
  textoFrase: {
      fontSize: 20,
      // fontWeight: "bold",
      textAlign: "center",
      color: "#dd7b22",
      margin: 30,
      fontStyle: "italic",
      fontFamily: "helvetica"
    },
    botao: {
      width: 230,
      height: 50,
      borderColor: "#dd7b22",
      borderWidth: 2,
      borderRadius: 25,
    },
    btnArea: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    btnTexto: {
      fontSize: 17,
      fontWeight: "bold",
      // textAlign: "center",
      color: "#dd7b22",
    },
  

});

export default App;