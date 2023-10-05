
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';

export default function Body() {
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [imc, setImc] = useState("Mete os dados aí");

    function calcular(){
        alert('Calculando...')
    }
 return (
   <View style={body.container}>
        <Text>Calcule seu IMC e mude sua vida!</Text>
        <View style={body.card}>
            <Text style={body.label}>Peso</Text>
            <TextInput 
                value={peso}
                onChangeText={setPeso}
                style={body.input}
            />
        </View>
        <View style={body.card}>
            <Text style={body.label}>Altura</Text>
            <TextInput 
                value={altura}
                onChangeText={setAltura}
                style={body.input}
            />
        </View>
        <Pressable style={body.botao} onPress={calcular}>
            <Text>Calcular</Text>
        </Pressable>

        <Text>{imc}</Text>
   </View>
  );
}

const body = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00ffff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width:'100%',
    },
    input: {
        borderWidth: 1,
        height: 40,
    },
    label:{},
    card: {},
    botao:{
        borderWidth: 1,
        padding: 5,
        marginTop: 10,
        borderRadius: 5,
    }
  });