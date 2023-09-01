import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native';

export default function App() {
  const [entrada, setEntrada] = useState('')
  const [saidaDolar, setSaidaDolar] = useState(0)
  function converterR_D() {
    let dolar = Number(entrada) / 4.87
    setSaidaDolar(dolar)
  }
  return (
    // <View style={styles.container}>
      <ScrollView> 
        <View style={styles.container}>
        
        <View style={styles.quadro}>
          <Text>Converter Reais para Dolar</Text>
          <TextInput
            style={styles.input}
            value={entrada}
            keyboardType='numeric'
            onChangeText={setEntrada}
            // placeholder='Bla'
          />
          <TouchableOpacity style={styles.botao} onPress={converterR_D}>
            <Text style={styles.textoBotao}>Aperte aí</Text>
          </TouchableOpacity>
          <Text>{saidaDolar}</Text>
        </View>
        <View style={styles.quadro}>
          <Text>Texto</Text>
        </View>
        <View style={styles.quadro}>
          <Text>Texto</Text>
        </View>
        <View style={styles.quadro}>
          <Text>Texto</Text>
        </View>
        <View style={styles.quadro}>
          <Text>Texto</Text>
        </View>

        <StatusBar style="auto" />
        </View>
        </ScrollView>

    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  quadro: {
    backgroundColor: '#55ff55',
    height: 150
  },
  input: {
    borderWidth: 1,
    width: 140,
    height: 35,
    padding: 10,
    borderRadius: 10
  },
  botao: {

  },
  textoBotao: {}
});
