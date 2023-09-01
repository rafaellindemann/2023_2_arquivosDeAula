import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [imagemDado, setImagemDado] = useState(require('./imagens-dado/outras/dice-target.png'))
  const [frase, setFrase] = useState()
  function sortear(){
    let n = Math.ceil(Math.random()*6)
    // setImagemDado(require('./imagens-dado/2.png'))
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
      {/* <Text>Apareceu?!</Text> */}
      <Image 
        source={imagemDado}
        style={styles.imagem}
      />
      <TouchableOpacity style={styles.botao} onPress={sortear}>
        <Text style={styles.textoBotao}>Jogar</Text>
      </TouchableOpacity>
      <Text>"{frase}"</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  imagem:{
    width: 200,
    height: 200,
    borderRadius: 20
  },
  botao: {
    width: 150,
    height: 50,
    backgroundColor: '#444444',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textoBotao: {
    fontSize: 25,
    color: 'red',
  }
});
