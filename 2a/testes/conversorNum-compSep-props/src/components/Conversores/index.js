import { StyleSheet, Text, View, TextInput } from 'react-native';

export function Conversor(props){
  return (
    <View style={estilo1.linha}>
      <View style={estilo1.esquerda}><Text style={{color:'#fff',fontSize:15}}>{props.nome}</Text></View>
      <TextInput 
        style={estilo1.input}
        placeholder={props.placeholder}
        placeholderTextColor={'#CCCCCC'}
        inputMode='numeric'
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