
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';

Text.defaultProps = {
    style: {
      color: 'red', // Defina a cor desejada aqui
      fontSize: 16, // Defina o tamanho da fonte desejado aqui
      // Outros estilos globais de texto, se necessário
    },
  };

export default function Body() {
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [imc, setImc] = useState();

    function calcular(){
        // alert('Calculando...')
        let resultado = Number(peso) / (Number(altura)**2 )
        setImc(resultado.toFixed(2).replace('.', ','))
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

        <Text style={{fontSize:45}}>{imc}</Text>
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
      paddingTop: 33,
    },
    input: {
        borderWidth: 1,
        height: 40,
        borderRadius: 10,
    },
    label:{
        color: '#000fff'
    },
    card: {},
    botao:{
        borderWidth: 1,
        padding: 5,
        marginTop: 10,
        borderRadius: 10,
    },

  });