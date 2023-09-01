import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react';


// bug list
// string no input de valor cadastra
// pesquisar por nome '' dá ruim grande - este aparece melhor se clicar no Editar quando o input de nome estiver vazio
// editar valor para '' (vazio) não poderia ser legal


// let produtos = []
let produtos = [
  {nome: "Abacaxi", valor: 11},
  {nome: "Bergamota", valor: 22},
  {nome: "Coco", valor: 33},
  {nome: "Damasco", valor: 44},
  {nome: "Emeixa", valor: 55},
]


export default function App() {
  const [entradaNome, setEntradaNome] = useState('')
  const [entradaValor, setEntradaValor] = useState('')

  function cadastrar(){
    if(entradaNome.trim() != '' && entradaValor.trim() != ''){
      let produto = {
        nome: entradaNome.trim(),
        valor: Number(entradaValor)
      }
      produtos.push(produto)
  
      setEntradaNome('')
      setEntradaValor('')
      console.log(produtos);
    }else{
      alert("Insira os valores")
    }
  }
  function pesquisar(){
    for(let i=0; i<produtos.length; i++){
      if(produtos[i].nome.toUpperCase() == entradaNome.toUpperCase()){
        setEntradaValor(produtos[i].valor.toString())
        return produtos[i]
      }
    }
  }
  function editar(){
    let produto = pesquisar()
    produto.valor = Number(entradaValor)
    setEntradaNome('')
    setEntradaValor('')
  }
  function apagar(){
    // let produto = pesquisar()
    // let i = produtos.indexOf(produto)
    // produtos.splice(i,1)

    produtos.splice(produtos.indexOf(pesquisar()) ,1)

    setEntradaNome('')
    setEntradaValor('')
  }
  function testar(){
    // let produto = pesquisar()
    // // console.log(produto);
    // produto.valor = 999

    // console.log(produtos)
    // console.log(produtos.indexOf(produto));
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
        value={entradaValor}
        onChangeText={setEntradaValor}
        style={styles.inputs}
        placeholder='Valor...'
        keyboardType='numeric'
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
        <TouchableOpacity style={styles.botao} onPress={apagar}>
          <Text style={styles.textoBotao}>Apagar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={testar}>
          <Text style={styles.textoBotao}>*TESTAR*</Text>
        </TouchableOpacity>
      </View>

      <View>
        {produtos.map( (produto, index) => (
          <Text key={index}>{produto.nome} - R${produto.valor.toFixed(2)}</Text>
        ) )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#aaaaaa',
    paddingTop: 30,
    gap: 5,
  },
  inputs: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  botao: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    backgroundColor: 'cyan',
  },
  textoBotao: {
  },
  linha:{
    flexDirection: 'row',
    gap: 2,
  },
});
