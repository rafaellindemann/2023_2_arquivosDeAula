import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [entradaReal, setEntradaReal] = useState('');
  const [saidaDolar, setSaidaDolar] = useState('');

  function converterR_D(){
    setSaidaDolar(Number(entradaReal) / 4.87)
  }
  return (
    <ScrollView style={{backgroundColor: '#000'}}>
      <View style={styles.container}>
        <Text style={styles.textoH1}>MOEDAS</Text>
        <View style={styles.card}>
          <Text>Reais &gt;&gt; Dolar</Text>
          <TextInput 
            value={entradaReal}
            style={styles.input}
            keyboardType='numeric'
            onChangeText={setEntradaReal}
            placeholder='Valor em Reais'
          />
          <TouchableOpacity style={styles.botao} onPress={converterR_D}>
            <Text style={styles.textoBotao}>Converter para Dolar</Text>
          </TouchableOpacity>
          <Text>{saidaDolar}</Text>
        </View>
        <View style={styles.card}><Text>Card</Text></View>
        <View style={styles.card}><Text>Card</Text></View>
        <View style={styles.card}><Text>Card</Text></View>
        <View style={styles.card}><Text>Card</Text></View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#44aa44',
    // backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 60,
  },
  card: {
    height: 250,
    width: '95%',
    backgroundColor: '#aaffaa',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    gap: 10,
  },
  textoH1: {
    fontSize: 55,
  },
  input: {
    borderWidth: 1,
    width: 140,
    height: 35,
    padding: 10,
    borderRadius: 10
  },
  botao:{
    borderWidth: 1,
    padding: 10,
    borderColor: '#005500',
    borderRadius: 10,
    backgroundColor: '#338833'
  }
});
