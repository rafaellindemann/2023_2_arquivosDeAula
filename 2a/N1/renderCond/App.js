import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
const [contador, setContador] = useState(1)
function verificarRender(){
  if(contador > 5){
    return <Componente1 />
  }

  return <Componente2 />  
}
  return (
    <View style={styles.container}>

      { verificarRender() }
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
function Componente2(){
  return(
    <Text>Eu sou o Componente2 e eu sou muito negativo</Text>
  )
}
