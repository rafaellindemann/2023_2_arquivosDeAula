import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let renderizar = true
  return (
    <View style={styles.container}>
      
      { renderizar && <Componente1 />}

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
