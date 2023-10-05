
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
 return (
   <View style={header.container}>
        <Text style={header.texto}>Header</Text>
   </View>
  );
}

const header = StyleSheet.create({
    container: {
    //   flex: 1,
      height: 70,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%'
    },
    texto:{
        color: '#00ffff',

    }
  });