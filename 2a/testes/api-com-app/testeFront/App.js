
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

export default function App() {
  const [cont, setCont] = useState(0);
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/cursos'); // Use o endereço do seu servidor Express
      // const response = await axios.get('192.168.15.10:3000/cursos'); // Use o endereço do seu servidor Express
      setCont(response.data.cont);
       console.log(response.data.cont);
    } catch (error) {
      console.error('Erro ao buscar dados do servidor:', error);
    }
  }
  useEffect(() => { //solicita à API ao inicializar o app
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contagem do servidor: {cont}</Text>
      <Button title="Atualizar Contagem" onPress={() => fetchData()} />
    </View>
  );
}