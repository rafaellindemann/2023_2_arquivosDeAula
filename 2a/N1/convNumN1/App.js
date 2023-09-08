import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather'
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
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
});

function Header() {
  return (
    <View style={stylesHeader.header}>
      <View style={stylesHeader.linha}>
        <Text style={stylesHeader.textoL1}>Conversor de base</Text>
        <View style={stylesHeader.littleCorner}>
          <Text style={stylesHeader.textoL1}>RESET</Text>
          <Feather 
            name={'more-vertical'}
            size={25}
            color={'#fff'}
          />
        </View>
      </View>
      <View style={stylesHeader.linha}>
        <Text style={stylesHeader.textoL2}>BASES COMUNS</Text>
        <Text style={stylesHeader.textoL2}>TODAS AS BASES</Text>
      </View>
    </View>
  );
}
const stylesHeader = StyleSheet.create({
  header:{
    backgroundColor: '#3252e5',
    height: 100,
    width: '100%',
    justifyContent: 'space-between'
  },
  linha:{
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 10
  },
  textoL1: {
    color: '#fff',
    fontSize: 20,
  },
  textoL2: {
    color: '#fff',
    fontSize: 15,
  },
  littleCorner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    gap: 10
  },
});

function Body() {
  return (
    <View style={stylesBody.body}>
      <Bin />
      <Oct />
      <Dec />
      <Hex />
    </View>
  )
}

const stylesBody = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingTop: 20,
    gap: 10,
  },
  bin: {
    width: '90%',
    flexDirection: 'row',
    borderRadius: 15,
  },
  esquerda: {
    backgroundColor: '#3252e5',
    width: '20%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  input: {
    backgroundColor: '#333333',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#3252e5',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    color: '#aaa',
    textAlign: 'center',
  },
  textoBin: {
    color: '#fff',
    fontSize: 20,
  },
})

function Bin() {
  return (
    <View style={stylesBody.bin}>
      <View style={stylesBody.esquerda}>
        <Text style={stylesBody.textoBin}>Bin</Text>
      </View>
      <TextInput 
        style={stylesBody.input}
        placeholder="Base2"
      />
    </View>
  )
}
function Oct() {
  return (
    <View style={stylesBody.bin}>
      <View style={stylesBody.esquerda}>
        <Text style={stylesBody.textoBin}>Oct</Text>
      </View>
      <TextInput 
        style={stylesBody.input}
        placeholder="Base8"
      />
    </View>
  )
}
function Dec() {
  return (
    <View style={stylesBody.bin}>
      <View style={stylesBody.esquerda}>
        <Text style={stylesBody.textoBin}>Dec</Text>
      </View>
      <TextInput 
        style={stylesBody.input}
        placeholder="Base10"
      />
    </View>
  )
}
function Hex() {
  return (
    <View style={stylesBody.bin}>
      <View style={stylesBody.esquerda}>
        <Text style={stylesBody.textoBin}>Hex</Text>
      </View>
      <TextInput 
        style={stylesBody.input}
        placeholder="Base16"
      />
    </View>
  )
}

function Footer() {
  return (
    <View style={stylesFooter.footer}>
      <Text style={stylesFooter.textoFooter}>SHEIN</Text>
    </View>
  )
}


const stylesFooter = StyleSheet.create({
  footer: {
    height: 60,
    backgroundColor: '#fff',
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textoFooter:{
    color: '#000',
    fontSize: 40,
  }
});