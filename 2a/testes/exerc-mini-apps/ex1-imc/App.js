import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Body from './src/components/Body';

Text.defaultProps = {
  style: {
    color: 'red', // Defina a cor desejada aqui
    fontSize: 16, // Defina o tamanho da fonte desejado aqui
    // Outros estilos globais de texto, se necessário
  },
};

export default function App() {
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
