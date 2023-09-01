import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';




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
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor:'#ff0000',
    height: 65,
    width: '100%',
    fontSize: 35,
    textAlignVertical: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 35
  },
  body: {
    backgroundColor:'#222',
    flex: 1,
    width: '100%',
    color: 'white',
    fontSize: 35,
    textAlignVertical: 'center',
    textAlign: 'center',

  },
  footer: {
    backgroundColor:'#00ff00',
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    fontSize: 20,
    textAlignVertical: 'center',
    textAlign: 'center',
  },


});

function Header(){
  return (
    <Text style={styles.header}>Eu sou o header</Text>
  )
}
function Body(){
  return (
    <Text style={styles.body}>
      Eu sou o Body
    </Text>
  )
}

function Footer(){
  return(
    <Text style={styles.footer}>Eu sou uma propaganda feliz :D</Text>
  )
}




