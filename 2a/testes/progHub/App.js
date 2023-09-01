import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from 'react';
import Feather from "@expo/vector-icons/Feather";

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
  const [conteudoFeed, setConteudoFeed] = useState(<Feed />);
  const [corDaFonte, setCorDaFonte] = useState('#00ff00')

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
            color={corDaFonte}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={mostrarPerfil}>
        <FontAwesome
            name='user'
            size={45}
            color={corDaFonte}
          />
      </TouchableOpacity>
      <FontAwesome 
          name='bicycle'
          size={45}
          color={corDaFonte}
        />
      <Feather 
          // name='briefcase'
          // name='box'
          // name='cast'
          // name='check-square'
          // name='book'
          // name='github'
          name='sunrise'
          size={45}
          color={corDaFonte}
        />
      </View>
      <View style={styles.feed}>
        <ScrollView>
          {conteudoFeed}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Text style={{color: corDaFonte, fontSize:20, fontFamily: 'monospace'}}>progHub</Text>
        <FontAwesome 
            name='terminal'
            size={20}
            color={corDaFonte}
          />
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor:'#000000',
    height: 65,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 35
  },
  feed: {
    backgroundColor:'#111',
    flex: 1,
    width: '100%'
  },
  footer: {
    backgroundColor:'#000000',
    height: 40,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textoPost:{
    fontSize: 20,
    textAlign: 'justify',
    paddingTop: 5,
    fontFamily: 'monospace',
  },
  textoPerfil:{
    fontSize: 20,
    textAlign: 'justify',
    paddingTop: 5,
    color: '#00ff00',
    fontFamily: 'monospace',
  },

});

function Feed(){
  return (
    <View>
      {postagens.map( (post, index) => (
          <Post key={index} imagem={post.imagem} texto={post.texto}></Post>
        ) )}
    </View>
  )
}
function Post(props){
  return (
    <View style={{alignItems:'center', padding:20}}>
      <Feather 
        name={props.imagem}
        size={160}
        color='#00ff00'
      />
      <Text style={[styles.textoPost, {color: '#00ff00'}]}>{props.texto}</Text>
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