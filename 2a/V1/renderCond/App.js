import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [contador, setContador] = useState(10);
  let renderizar = true;
  function aumentar(){
    setContador(contador+1)
  }
  function diminuir(){
    setContador(contador-1)
  }

  return (
    <View style={styles.container}>
      
      {/* { renderizar &&  <Componente1 />} */}

      {/* { contador>5 && <Componente1 />} */}

      { contador>0 ?  <Componente1 /> : <Componente2 />}
      <Button title='+' onPress={aumentar}/>
      { contador }
      <Button title='-' onPress={diminuir}/>
      
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
    <Text>Eu sou o Componente1</Text>
  )
}

function Componente2(){
  return(
    <Text>Eu sou o Componente2</Text>
  )
}