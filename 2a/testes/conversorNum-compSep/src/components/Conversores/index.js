import { StyleSheet, Text, View, TextInput } from 'react-native';

export function Bin(){
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
export function Oct(){
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
export function Dec(){
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
export function Hex(){
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