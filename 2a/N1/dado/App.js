import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
const [numero, setNumero] = useState('⬇')
const [imagemDado, setImagemDado] = useState(require('./imagens-dado/outras/dice-target.png'))
  function sortear(){
    let n = Math.ceil(Math.random() * 6 )
    setNumero(n)
    switch(n){
      case 1: setImagemDado(require('./imagens-dado/1.png'))
      break
      case 2: setImagemDado(require('./imagens-dado/2.png'))
      break
      case 3: setImagemDado(require('./imagens-dado/3.png'))
      break
      case 4: setImagemDado(require('./imagens-dado/4.png'))
      break
      case 5: setImagemDado(require('./imagens-dado/5.png'))
      break
      case 6: setImagemDado(require('./imagens-dado/6.png'))
      break 
    }  
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={imagemDado}
      />
      <Text style={styles.resultado}>{numero}</Text>
      <TouchableOpacity 
        style={styles.botao}
        onPress={ sortear }
      >
        <Text style={styles.textoBotao}>Clique</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: '#222222',
    width: 210,
    height: 65,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  textoBotao: {
    color: 'white',
    fontSize: 30,
  },
  resultado: {
    fontSize: 100,
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 20,
  }
});
