import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput} from 'react-native';
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

  function mostrarFeed(){
    setConteudoFeed(<Feed />)
  }
  function mostrarPerfil(){
    setConteudoFeed(<Perfil preferencias={"Moto"} imagem={'user'} texto={"http://localhost:19006/"} />)
    
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={mostrarFeed}>
        <FontAwesome
            name='home'
            size={45}
            color='#00FFFF'
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={mostrarPerfil}>
        <FontAwesome
            name='user'
            size={45}
            color='#00FFFF'
          />
      </TouchableOpacity>
      <FontAwesome 
          name='bicycle'
          size={45}
          color='#00FFFF'
        />
      </View>
      <View style={styles.feed}>
        <ScrollView>
          {conteudoFeed}
        </ScrollView>
      </View>
      <View style={styles.footer}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor:'#000000',
    height: 65,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  feed: {
    backgroundColor:'#232323',
    flex: 1,
    width: '100%'
  },
  footer: {
    backgroundColor:'#00ffff',
    height: 65,
    width: '100%'
  },
  textoPost: {
    color: '#00ffff',
    fontFamily:'monospace'
  },
  textoPerfil: {
    color: '#00ffff',
    fontFamily:'monospace'
  },
  

});

function Feed(){
  return (
    <View>
      {/* <Post imagem={postagens[0].imagem} texto={postagens[0].texto}/> */}
      {postagens.map( (post, index) => (
        <Post imagem={post.imagem} texto={post.texto} key={index}/>
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
        color='#00FFFF'
      />
      <Text style={styles.textoPost}>{props.texto}</Text>
    </View>
  )
}

function Perfil(props){
  return (
    <View style={{alignItems:'center'}}>
      <Feather 
        name={props.imagem}
        size={160}
        color='#00FFFF'
      />
      <Text style={styles.textoPerfil}>{props.texto}</Text>
      <Text style={styles.textoPerfil}>{props.preferencias}</Text>

      <TextInput 
        multiline={true}
        style={{borderWidth:1,
          borderColor:'#00ffff', 
          height:100, 
          width:'80%',
          paddingTop: 0,
          paddingBottom: 0,
          verticalAlign: 'top',
        }}
      />
    </View>
  )
}

// function FormPost(){
// const [inputImagem, setInputImagem] = useState();
// const [inputTexto, setInputTexto] = useState();
//   return (

//   )
// }