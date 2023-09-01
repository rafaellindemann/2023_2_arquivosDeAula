import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Feather from "@expo/vector-icons/Feather";

export default function App() {
  const [azul, setAzul] = useState('#3252e5')
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 35,
  },
  header: {
    backgroundColor: '#3252e5',
    height: 100,
    width: '100%',
    // gap: 5,
    justifyContent: 'space-between',
  },
  linha: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 5,
  },
  textoHL1: {
    color:'#fff',
    fontSize: 20,
  },
  textoHL2: {
    color:'#fff',
    fontSize: 15,
  },
  body: {
    flex: 1,
  },
});

function Header(){
  return (
    <View style={styles.header}>
      <View style={styles.linha}>
        <Text style={styles.textoHL1}>Conversor de base</Text>
        <View style={{flexDirection: 'row', gap: 10, alignItems:'center'}}>
          <Text style={styles.textoHL1}>RESET</Text>
          <Feather 
            name='more-vertical'
            size={20}
            color='#FFF'
        />
        </View>

      </View>
      <View style={styles.linha}>
        <Text style={styles.textoHL2}>BASES COMUNS</Text>
        <Text style={styles.textoHL2}>TODAS AS BASES</Text>
      </View>
    </View>
  )
}

function Body(){
  return (
    <View style={styles.body}></View>
  )
}

function Bin(){
  return (
    <View style={estilo1.linha}>
      <View style={estilo1.esquerda}><Text></Text></View>
      <TextInput 
        style={estilo1.input}
      />
    </View>
  )
}
const estilo1 = StyleSheet.create({
  esquerda: {
    backgroundColor: '#3252e5',

  },
  linha: {
    
  },
  input: {},
})
