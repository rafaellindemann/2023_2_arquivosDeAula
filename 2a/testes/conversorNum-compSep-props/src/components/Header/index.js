import { StyleSheet, Text, View } from 'react-native';
import Feather from "@expo/vector-icons/Feather";

export default function Header(){
    return (
      <View style={styles.header}>
        <View style={styles.linha}>
          <Text style={styles.textoHL1}>Conversor de base</Text>
          <View style={{flexDirection: 'row', gap: 10, alignItems:'center'}}>
            <Text style={styles.textoHL1}>RESET</Text>
            <Feather 
              name='more-vertical'
              size={20}
              color='#FFF'
          />
          </View>
  
        </View>
        <View style={styles.linha}>
          <Text style={styles.textoHL2}>BASES COMUNS</Text>
          <Text style={styles.textoHL2}>TODAS AS BASES</Text>
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3252e5',
        height: 100,
        width: '100%',
        // gap: 5,
        justifyContent: 'space-between',
        padding: 5,
        },
        linha: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 5,
        },
    textoHL1: {
        color:'#fff',
        fontSize: 20,
    },
        textoHL2: {
        color:'#fff',
        fontSize: 15,
    },
})