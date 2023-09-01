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
    padding: 5,
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
    width: '100%',
    paddingTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 5,
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
    <View style={styles.body}>
      <Bin />
      <Oct />
      <Dec />
      <Hex />
    </View>
  )
}

function Bin(){
  return (
    <View style={estilo1.linha}>
      <View style={estilo1.esquerda}><Text>Bin</Text></View>
      <TextInput 
        style={estilo1.input}
        placeholder='Base2'
        placeholderTextColor={'#CCCCCC'}
        inputMode='numeric'
      />
    </View>
  )
}
function Oct(){
  return (
    <View style={estilo1.linha}>
      <View style={estilo1.esquerda}><Text>Oct</Text></View>
      <TextInput 
        style={estilo1.input}
        placeholder='Base8'
        placeholderTextColor={'#CCCCCC'}
        inputMode='numeric'
      />
    </View>
  )
}
function Dec(){
  return (
    <View style={estilo1.linha}>
      <View style={estilo1.esquerda}><Text>Dec</Text></View>
      <TextInput 
        style={estilo1.input}
        placeholder='Base10'
        placeholderTextColor={'#CCCCCC'}
        inputMode='numeric'
      />
    </View>
  )
}
function Hex(){
  return (
    <View style={estilo1.linha}>
      <View style={estilo1.esquerda}><Text>Hex</Text></View>
      <TextInput 
        style={estilo1.input}
        placeholder='Base16'
        placeholderTextColor={'#CCCCCC'}
        // inputMode='numeric'
      />
    </View>
  )
}

const estilo1 = StyleSheet.create({
  esquerda: {
    backgroundColor: '#3252e5',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  linha: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#3252e5',
    width: '80%',
    height: 50,
    backgroundColor: '#333333',
    borderRadius: 15,
  },
  input: {
    color: '#dddddd',
    backgroundColor: '#333333',
    width: '80%',
    borderRadius: 15,
    textAlign: 'center',
    // alignContent: 'center',

  },
})

