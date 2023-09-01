import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [valor, setValor] = useState(0);
  const [inputValor, setInputValor] = useState(0);

  function enviar(){
    setValor(inputValor)
  }
  return (

    <View style={styles.container}>
      <Text></Text>
      <Text>{valor}</Text>
      <TextInput 
        onChange={(numero) => setInputValor(numero) }
        style={styles.input}
      />
      <TouchableOpacity style={styles.botao} onPress={ enviar }>
        <Text style={styles.textoBotao}>Enviar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    width: 150,
    height: 50,
    backgroundColor: '#993333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textoBotao: {
    fontSize: 25,
    color: 'red',
  },
  input:{
    height: 45,
    borderWidth: 1,
    margin: 10
  }
});
