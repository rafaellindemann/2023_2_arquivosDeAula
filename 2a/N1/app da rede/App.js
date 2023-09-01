import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from 'react';
import Feather from "@expo/vector-icons/Feather";

export default function App() {
  const [conteudoFeed, setConteudoFeed] = useState(<Feed />);

  function mostrarFeed(){
    setConteudoFeed(<Feed />)
  }
  function mostrarPerfil(){
    setConteudoFeed(<Perfil />)
    
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={mostrarFeed}>
        <FontAwesome
            name='home'
            size={45}
            color='#00FFFF'
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={mostrarPerfil}>
        <FontAwesome
            name='user'
            size={45}
            color='#00FFFF'
          />
      </TouchableOpacity>
      <FontAwesome 
          name='bicycle'
          size={45}
          color='#00FFFF'
        />
      </View>
      <View style={styles.feed}>
        <ScrollView>
          {conteudoFeed}
        </ScrollView>
      </View>
      <View style={styles.footer}></View>
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
  header: {
    backgroundColor:'#000000',
    height: 65,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  feed: {
    backgroundColor:'#7777ff',
    flex: 1,
    width: '100%'
  },
  footer: {
    backgroundColor:'#00ff44',
    height: 65,
    width: '100%'
  }

});

function Feed(){
  return (
    <View>
      <Post />
      <Post />
      <Post />
      <Post />
    </View>
  )
}
function Post(){
  return (
    <View style={{alignItems:'center', padding:20}}>
      <FontAwesome 
        name='motorcycle'
        size={160}
        color='#00FFFF'
      />
      <Text>Textão da rede social,Textão da rede social,Textão da rede social,Textão da rede social,Textão da rede social,Textão da rede social,Textão da rede social. </Text>
    </View>
  )
}

function Perfil(){
  return (
    <Text>Eu sou o perfil</Text>
  )
}