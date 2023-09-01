import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

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
  header:{
    backgroundColor: '#ff0000',
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer:{
    backgroundColor: '#00ff00',
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body:{
    flex: 1,
    backgroundColor: '#121212',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoHeader: {
    fontSize: 40,
    color: '#000',
  },
  textoBody:{
    fontSize: 50,
    color: '#fff',
  },
  textoFooter:{
    fontSize: 25,
    color: '#000',
  },


});

function Header() {
  return(
    <View style={styles.header}>
      <Text style={styles.textoHeader}>Eu sou o header</Text>
    </View>
  )
}
function Body() {
  return(
    <View style={styles.body}>
      <Text style={styles.textoBody}>Eu sou o body</Text>
    </View>
  )
}

function Footer() {
  return(
    <View style={styles.footer}>
      <Text style={styles.textoFooter}>Eu sou uma propaganda feliz :D</Text>
    </View>
  )
}
