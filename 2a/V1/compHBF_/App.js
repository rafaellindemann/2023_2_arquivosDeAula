import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

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
  semRegras:{
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
  }
});

function Header(){
  return (
    <View style={{height: 70, backgroundColor:'#ff0044', width:'100%', justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:40}}>Eu sou o Header</Text>

    </View>
  )
}
function Body(){
  return(
    <View style={{flex:1, backgroundColor:'#121212', width:'100%',justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize: 50, color:'#ffffff'}}>Eu sou o Body</Text>
      <TextInput 
        style={{color:'red', textAlign:'center'}}
        placeholder='base1',
        placeholderTextColor:'#ffffff'
      />
    </View>
  )
}

function Footer(){
  return(
    <View style={{height: 70, backgroundColor:'#00ff00', width:'100%', justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:20}}>Eu sou uma propaganda feliz :D</Text>
    </View>
  )
}

function tester(){
  return(
    <View>
          <View></View>
          <View></View>
          <View></View>
    </View>

  )
}
