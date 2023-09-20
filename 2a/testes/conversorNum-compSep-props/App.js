import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
// import Feather from "@expo/vector-icons/Feather";

import Header from './src/components/Header';
import Body from './src/components/Body';
export default function App() {
  const [azul, setAzul] = useState('#3252e5')
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
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 35,
  },

});







