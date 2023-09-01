import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Image, Text, View } from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';
import { useState } from "react";

export default function App() {
  const [cont, setCont] = useState(0)

  function clicado() {
    setCont(cont + 1)

  }
  function zerar() {
    // setCont(0)
    setCont(Math.ceil(Math.random()*6))

  }

  return (
    <View style={styles.container}>
      {/* <Pressable>
        <Image 
          Source={require('./')}
        />
      </Pressable> */}

      <Text style={styles.textoH1}>Dado</Text>
      {/* <Text style={styles.textoH2}>Dominando a arte de fazer CRUD</Text> */}
      <Text style={styles.textoH1}>{cont}</Text>
      {/* <TouchableOpacity style={styles.botao} onPress={clicado}>
        <Text style={styles.textoBotao}>Aumentar</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.botao} onPress={zerar}>
        <Text style={styles.textoBotao}>Zerar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  textoH1: {
    color: 'red',
    fontSize: 60
  },
  textoH2: {
    color: '#ff00ff'
  },
  textoH3: {
    color: '#fff000'
  },
  botao: {
    width: 150,
    height: 50,
    backgroundColor: '#993333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textoBotao: {
    fontSize: 25,
    color: 'red',
  }

});
