import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [entradaRealDolar, setEntradaRealDolar] = useState('');
  const [saidaDolar, setSaidaDolar] = useState('...');
  const [entradaDolar, setEntradaDolar] = useState('');
  const [saidaRealDolar, setSaidaRealDolar] = useState('');
  function converterR_D() {
    let dolar = Number(entradaRealDolar) / 4.87
    setSaidaDolar(dolar.toFixed(2))
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textoH1}>Conversores</Text>
        
        <View style={styles.card}>
          <Text style={styles.textoH2}>Real para Dolar</Text>
          <View style={styles.linha}>

            <TextInput
              style={styles.input}
              value={entradaRealDolar}
              onChangeText={setEntradaRealDolar}
              keyboardType='numeric'
            />
            <TouchableOpacity style={styles.botao} onPress={converterR_D}>
              <Text style={styles.textoBotao}>Calcular</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.textoH2}>U${saidaDolar}</Text>
        </View>

        <View style={styles.card}><Text>Dolar para Real</Text></View>
        <View style={styles.card}><Text>Real para Euro</Text></View>
        <View style={styles.card}><Text>Euro para Real</Text></View>
        <View style={styles.card}><Text>Real para bitcoin</Text></View>
        <View style={styles.card}><Text>bitcoin para Real</Text></View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  input: {
    borderWidth: 1,
    width: 100,
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#ddffdd',
  },
  card: {
    width: '95%',
    height: 200,
    backgroundColor: '#aaffaa',
    borderWidth: 1,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  textoH1: {
    fontSize: 60,
  },
  textoH2: {
    fontSize: 20,
  },
  botao: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#66ff66',
  },
  textoBotao: {},
  linha: {
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
  },
});
