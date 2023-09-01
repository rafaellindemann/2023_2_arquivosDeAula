import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { useState } from 'react';

// let produtos = []
let produtos = [
  {nome: "Banana", preco:111},
  {nome: "Limão", preco:222},
  {nome: "Melancia", preco:333},
  {nome: "Fiat Uno", preco:444},
  {nome: "Prego", preco:555}
]
export default function App() {
  const [entradaNome, setEntradaNome] = useState("")
  const [entradaPreco, setEntradaPreco] = useState("")

  function cadastrar(){
    let produto = {
      nome: entradaNome,
      preco: Number(entradaPreco)
    }
    produtos.push(produto);
    console.log(produtos);
    setEntradaNome('')
    setEntradaPreco('')
  }

  function pesquisar(){
    for(let i=0; i<produtos.length; i++){
      if(entradaNome == produtos[i].nome){
        setEntradaPreco( produtos[i].preco.toString() )
        return produtos[i]
      }
    }
  }

  function editar(){
    let produto = pesquisar()
    produto.preco = Number(entradaPreco)
    console.log(produto);
    setEntradaNome('')
    setEntradaPreco('')
  }
  function deletar(){
    let produto = pesquisar()
    produtos.splice(produtos.indexOf(produto),1)
    setEntradaNome('')
    setEntradaPreco('') 
  }
  function testar(){
    console.log(produtos);
    // pesquisar().preco = 0
    console.warn("Bla")
  }

  return (
    <View style={styles.container}>
      <Text>CRUD</Text>
      <TextInput 
        value={entradaNome}
        onChangeText={setEntradaNome}
        style={styles.inputs}
        placeholder='Nome...'
      />
      <TextInput 
        value={entradaPreco}
        onChangeText={setEntradaPreco}
        style={styles.inputs}
        keyboardType='numeric'
        placeholder='Preço...'
      />
      <View style={styles.linha}>
        <TouchableOpacity style={styles.botao} onPress={cadastrar}>
          <Text style={styles.textoBotao}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={pesquisar}>
          <Text style={styles.textoBotao}>Pesquisar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={editar}>
          <Text style={styles.textoBotao}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={deletar}>
          <Text style={styles.textoBotao}>Apagar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={testar}>
          <Text style={styles.textoBotao}>*TESTE*</Text>
        </TouchableOpacity>
      </View>

      <View>
        {produtos.map( (produto, index) => (
          <Text key={index}>{produto.nome} - R${produto.preco.toFixed(2)}</Text>
        ) )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    gap: 5,
  },
  inputs:{
    borderWidth: 1,
    width: 90,
    padding: 5,
    borderRadius: 5,
  },
  botao: {
    borderWidth: 1,
    backgroundColor: '#00ddff',
    padding: 5,
    borderRadius: 5,
  },
  textoBotao: {
    color: 'red'
  },
  linha: {
    flexDirection: 'row',
    gap: 2,
  },
});
