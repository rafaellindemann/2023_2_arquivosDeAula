import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { useState } from 'react';
import { ScrollView } from 'react-native-web';

let postagens = [
  {imagem: 'youtube', texto: 'Ae galera, saiu video novo no canal. Passa lá pra ver eu destruindo no portugol!🔮📺 \nyuoutube.com/devManoJuca \n#fullStackPortugol #portugolehprogramacao #respeitaosdev #tmj'},
  {imagem: 'arrow-up-right', texto: 'Cada linha de código é uma oportunidade para transformar lógica em realidade. Codando para criar o futuro. 💻✨ #DesenvolvimentoInovador'},
  {imagem: 'cloud-off', texto:'Bug? Isso é apenas um quebra-cabeça esperando para ser resolvido. Encontrando soluções elegantes no mundo da programação. 🐛🔍 #DebuggingLife'},
  {imagem: 'database', texto:'Na estrada da programação, cada erro é uma lição e cada desafio é uma chance de crescimento. A busca pela eficiência nunca para. ⚡👩‍💻 #CaminhoDoDev'},
  {imagem: 'codesandbox', texto:'Linhas de código se tornam pontes entre a imaginação e a realidade digital. Construindo possibilidades infinitas com as mãos no teclado. 🌉💡 #ArquitetoDeCodigo'},
  {imagem: 'coffee', texto:'Café, código, repetir. A rotina de um dev é uma dança constante entre criatividade e lógica. 🚀☕ #CodigoCriativo'},
  {imagem: 'codepen', texto:'Só os devs entendem a satisfação de um código limpo e bem documentado. Aquela sensação de realização é imbatível. 📝✅ #CodigoElegante'},
  {imagem: 'alert-triangle', texto:'No universo binário, os desafios se transformam em oportunidades para inovação. Codando hoje o mundo de amanhã. 🌐👨‍💻 #FuturoDoCodigo'},
  {imagem: 'activity', texto:'Enxergando além das linhas de código, vislumbrando um ecossistema de tecnologia em constante evolução. 🌍📱 #VisaoTech'},
  {imagem: 'award', texto:'A comunidade de desenvolvedores é como um vasto playground virtual, onde ideias se tornam colaborações e projetos incríveis. 🤝🌈 #ComunidadeDev'},
  {imagem: 'aperture', texto:'Cada algoritmo é uma jornada de resolução de problemas, uma trilha para aprimorar habilidades e chegar a soluções brilhantes. 🗺️✨ #AlgoritmoExplorador'},
]

export default function App() {
  const [conteudoFeed, setConteudoFeed] = useState(<Feed />)
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
            color='#000'
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={mostrarPerfil}>
        <FontAwesome
            name='user'
            size={45}
            color='#000'
          />
      </TouchableOpacity>
      <FontAwesome 
          name='terminal'
          size={45}
          color='#000'
        />
      </View>
      <View style={styles.feed}>
        <ScrollView>
          {conteudoFeed}
        </ScrollView>
      </View>
      <View style={styles.footer}><Text style={{color:'#0000ff'}}>Footer</Text></View>
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
  },
  header: {
    backgroundColor: '#00ff00',
    height: 65,
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    justifyContent: 'space-around'
  },
  feed: {
    backgroundColor: '#444444',
    // flex: 8,
    flex: 1,
    width: '100%',
  },
  footer: {
    backgroundColor: '#ff0000',
    height: 65,
    // flex: 1,
    width: '100%',
  },
});

function Feed(){
  return(
    <View>
      {/* <Text style={{color: '#fff', marginTop:20}}>Olá, eu sou um super componente.</Text> */}
      {/* <Post imagem={postagens[0].imagem} texto={postagens[0].texto}/> */}

      {postagens.map( (post, index) => (
        <Post texto={post.texto} imagem={post.imagem} key={index}/>
      ) )}

    </View>
  )
}

function Post(props){
  return (
    <View style={{alignItems:'center', padding:15, marginBottom: 25}}>
      <Feather
        name={props.imagem}
        size={145}
        color='#000'
      />
      <Text>{props.texto} </Text>
      
    </View>
  )
}

function Perfil(){
  return (
    <View style={{alignItems:'center', padding:20}}>
      <Feather 
        name='user-check'
        size={160}
        color='#00ff00'
      />
      <Text style={styles.textoPerfil}>Olá, eu sou o Testiano Testaferro e sou programador HTML senior. Eu gosto de esports, videogames, cupcakes salgados e meu sonho é levar o HTML para o backend.</Text>
    </View>
  )
}

function Postar(){
  const [inputImagem, setInputImagem] = useState();
  const [inputTexto, setInputTexto] = useState();
  
  function cadastrarPostagem(){

  }
  return (
    <TextInput 
      value={inputImagem}
      onChangeText={setInputImagem}
      style={}
    />

    // input pro textão
    // butão
  )
}