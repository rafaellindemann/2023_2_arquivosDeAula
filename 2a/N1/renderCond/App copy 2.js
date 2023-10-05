import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [renderizar, setRenderizar] = useState(true)
  // let renderizar = true
  function mostraEsconde(){
    setRenderizar(!renderizar)// inverte o valor de renderizar
  }
  return (
    <View style={styles.container}>
      
      { renderizar && <Componente1 />}

      <Button title={'Mostra/esconde'} onPress={mostraEsconde}/>
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
