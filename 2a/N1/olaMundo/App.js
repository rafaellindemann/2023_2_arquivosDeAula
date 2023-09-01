import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0)

  function contar(){
    setContador(contador+1)
  }
  function zerar(){
    setContador(0)
  }

  return (
    <View style={styles.container}>
     
      <Text style={styles.textoH1}>Cont Master</Text>
      <Text style={styles.textoH2}>{contador}</Text>
      <Button title='Aperte-me' onPress={ contar }/>
      <Button title='Zerar' onPress={ zerar } style={styles.botao}/>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoH1: {
    fontSize: 50,
    color: '#ff00ff',
    fontFamily:'mono'
  },
  textoH2: {
    fontSize: 30,
    color: '#ff0099'
  },

});
