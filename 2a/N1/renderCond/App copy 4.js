import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
const [contador, setContador] = useState(10)
function aumentar(){
  setContador(contador+1)
}
function diminuir(){
  setContador(contador-1)
}
  return (
    <View style={styles.container}>
      <Button title='+' onPress={aumentar}/>
      { contador }
      <Button title='-' onPress={diminuir}/>
      { contador>10 && <Componente1 />}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

function Componente1(){
  return(
    <Text>Eu sou o Componente1 e eu gosto de abraços quentinhos</Text>
  )
}
